import { useQuery, useMutation } from 'react-query';

import { Product } from 'types';

import { apiService } from 'services';

export function useGetMarket<T>(params: T) {
  const products = () => apiService.get('/products', params);

  interface UseGetMarketResponse {
    count: number;
    items: Product[];
    totalPages: number;
  }

  return useQuery<UseGetMarketResponse>(['market-products', params], products);
}

export function useGetUser() {
  const products = () => apiService.get('/products/user');

  interface UseGetUserResponse {
    products: Product[];
  }

  return useQuery<UseGetUserResponse>(['user-products'], products);
}

export function useCreateProduct<T>() {
  const createProduct = (data: T) => apiService.post('/products', data);

  return useMutation<Product, unknown, T>(createProduct);
}

export function useRemoveProduct<T>() {
  const deleteProduct = (data: T) => apiService.delete('/products', data);

  return useMutation<{}, unknown, T>(deleteProduct);
}
