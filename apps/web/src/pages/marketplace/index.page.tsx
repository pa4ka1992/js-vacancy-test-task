import { NextPage } from 'next';
import { useState } from 'react';
import { Button, Flex, Group, Pagination, Stack, Title } from '@mantine/core';

import { MarketplaceFilter, MarketplaceFilterTag, MarketplaceProductCard, MarketplaceSearch, MarketplaceSort } from 'components';

const Marketplace: NextPage = () => {
  const [isInCart, setIsInCart] = useState(false);

  return (
    <Group grow gap="lg" align="flex-start" wrap="nowrap">
      <MarketplaceFilter />

      <Stack maw="none" gap="md">
        <MarketplaceSearch />

        <Stack gap="xs">
          <Group justify="space-between">
            <Title order={5}>12 results</Title>

            <MarketplaceSort />
          </Group>

          <Group>
            <MarketplaceFilterTag label="1200-1500$" />
          </Group>

          <Flex gap="md" wrap="wrap" justify="center">
            <MarketplaceProductCard variant="market" product={{ id: '1', title: 'asdasd', price: 100, imgUrl: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp' }}>
              <Button onClick={() => setIsInCart(!isInCart)}>
                {isInCart ? 'Add to Cart' : 'In Cart'}
              </Button>
            </MarketplaceProductCard>
            <MarketplaceProductCard variant="market" product={{ id: '2', title: 'asdasd', price: 100, imgUrl: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp' }}>
              <Button onClick={() => setIsInCart(!isInCart)}>
                {isInCart ? 'Add to Cart' : 'In Cart'}
              </Button>
            </MarketplaceProductCard>
            <MarketplaceProductCard variant="market" product={{ id: '3', title: 'asdasd', price: 100, imgUrl: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp' }}>
              <Button onClick={() => setIsInCart(!isInCart)}>
                {isInCart ? 'Add to Cart' : 'In Cart'}
              </Button>
            </MarketplaceProductCard>

          </Flex>

          <Pagination mt="xl" size="sm" total={10} value={1} style={{ alignSelf: 'center' }} />
        </Stack>

      </Stack>
    </Group>
  );
};

export default Marketplace;
