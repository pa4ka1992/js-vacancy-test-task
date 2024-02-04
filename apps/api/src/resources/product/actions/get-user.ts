import { AppKoaContext, AppRouter } from 'types';

import { productService } from 'resources/product';

type ValidatedData = never;

async function handler(ctx: AppKoaContext<ValidatedData>) {
  const { user: { _id: id } } = ctx.state;

  const products = productService.find({ owner: id });

  ctx.body = {
    products,
  };
}

export default (router: AppRouter) => {
  router.get('/user', handler);
};
