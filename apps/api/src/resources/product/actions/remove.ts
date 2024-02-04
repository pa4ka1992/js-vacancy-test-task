import db from 'db';
import { z } from 'zod';

import { cloudStorageService } from 'services';
import { productService } from 'resources/product';
import { userService } from 'resources/user';

import { AppKoaContext, AppRouter, Next } from 'types';


const schema = z.object({
  id: z.string(),
});

type ValidatedData = z.infer<typeof schema>;

async function validator(ctx: AppKoaContext<ValidatedData>, next: Next) {
  const { id } = ctx.validatedData;
  const isProductExists = await productService.exists({ _id: id });

  ctx.assertError(isProductExists, 'Product not found');

  await next();
}

async function handler(ctx: AppKoaContext<ValidatedData>) {
  const { id } = ctx.validatedData;

  await db.database.withTransaction(async () => {
    await cloudStorageService.deleteObject(`products/${id}`);

    await productService.deleteOne({ id });

    await userService.updateOne({ id }, ({ productIds }) => ({
      productIds: productIds.filter(productId => productId !== id),
    }));
  });

  ctx.body = {};
}

export default (router: AppRouter) => {
  router.delete('/', validator, handler);
};
