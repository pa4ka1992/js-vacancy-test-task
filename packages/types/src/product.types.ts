import { z } from 'zod';

import { productSchema } from 'schemas';

export type Product = z.infer<typeof productSchema>;

export interface Buyings extends Product {
  count: number,
  purhaseDate?: Date
}
