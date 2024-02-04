import { z } from 'zod';

import { AppKoaContext, AppRouter } from 'types';

import { productService } from 'resources/product';

import { validateMiddleware } from 'middlewares';

const schema = z.object({
  page: z.string().transform(Number).default('1'),
  perPage: z.string().transform(Number).default('10'),
  sort: z.object({
    field: z.enum(['title', 'createdOn']),
    direction: z.enum(['asc', 'desc']).default('desc'),
  }),
  filter: z.object({
    price: z.object({
      from: z.number(),
      to: z.number(),
    }).nullable().default(null),
  }).nullable().default(null),
  searchValue: z.string().default(''),
});

type ValidatedData = z.infer<typeof schema>;

async function handler(ctx: AppKoaContext<ValidatedData>) {
  const {
    perPage, page, sort, searchValue, filter,
  } = ctx.validatedData;

  const validatedSearch = searchValue.split('\\').join('\\\\').split('.').join('\\.');
  const regExp = new RegExp(validatedSearch, 'gi');

  const products = await productService.find(
    {
      $and: [
        {
          $or: [
            { title: { $regex: regExp } },
            { price: { $eq: Number(searchValue) } },
          ],
        },
        filter?.price ? {
          price: {
            $gte: filter.price.from,
            $lt: filter.price.to,
          },
        } : {},
      ],
    },
    { page, perPage },
    { sort: { [sort.field]: sort.direction } },
  );

  ctx.body = {
    items: products.results,
    totalPages: products.pagesCount,
    count: products.count,
  };
}

export default (router: AppRouter) => {
  router.get('/', validateMiddleware(schema), handler);
};
