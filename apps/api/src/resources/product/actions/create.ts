import db from 'db';
import { z } from 'zod';

import { analyticsService, cloudStorageService } from 'services';
import { productService } from 'resources/product';
import { userService } from 'resources/user';

import { validateMiddleware } from 'middlewares';

import { AppKoaContext, AppRouter } from 'types';


const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

const schema = z.object({
  title: z.string().min(1, 'Please enter First name').max(100),
  price: z.number().min(0, 'Please enter value witch above zero'),
  image: z
    .any()
    .refine((files) => {
      return files?.[0]?.size <= MAX_FILE_SIZE;
    }, 'Max image size is 5MB.')
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      'Only .jpg, .jpeg, .png and .webp formats are supported.',
    ),
});

type ValidatedData = z.infer<typeof schema>;

async function handler(ctx: AppKoaContext<ValidatedData>) {
  const { user: { _id: id } } = ctx.state;

  const {
    title, price, image,
  } = ctx.validatedData;

  const { product } = await db.database.withTransaction(async () => {
    const createdProduct = await productService.insertOne({
      title,
      price,
      owner: id,
    });

    const { url } =  await cloudStorageService.uploadPublic(`products/${createdProduct._id}`, image);
  
    const updatedProduct =  await productService.updateOne({
      _id: createdProduct._id,
    }, () => (
      { imgUrl: url }
    ));

    await userService.updateOne( { _id: id }, ({ productIds }) => ({
      productIds: [...productIds, createdProduct._id],
    }));
  
    return { product: updatedProduct };
  });

  analyticsService.track('New product created', {
    title,
    price,
  });

  ctx.body = productService.getPublic(product);
}

export default (router: AppRouter) => {
  router.post('/', validateMiddleware(schema), handler);
};