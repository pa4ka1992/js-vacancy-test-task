import { Flex, Stack, Title } from '@mantine/core';
import { CreateProduct, DeleteProduct, MarketplaceProductCard, ProductStatus } from 'components';
import { NextPage } from 'next';

const YourProducts: NextPage = () => (
  <Stack gap="md">
    <Title order={3}>Your Products</Title>

    <Flex gap="md">
      <CreateProduct />

      <MarketplaceProductCard
        variant="products"
        topSlot={<DeleteProduct />}
        bottomSlot={<ProductStatus status="sold" />}
        product={{ id: '1', title: 'asdasd', price: 100, imgUrl: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp' }}
      />
    </Flex>

  </Stack>
);

export default YourProducts;
