import { routeUtil } from 'utils';

import getMarket from './actions/get-market';
import getUser from './actions/get-user';

import create from './actions/create';
import remove from './actions/remove';

const publicRoutes = routeUtil.getRoutes([
  getMarket,
]);

const privateRoutes = routeUtil.getRoutes([
  create,
  remove,
  getUser,
]);

export default {
  publicRoutes,
  privateRoutes,
};
