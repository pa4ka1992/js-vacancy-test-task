import { NextPage } from 'next';
import { Flex, Group, Pagination, Stack, Title } from '@mantine/core';

import { MarketplaceFilter, MarketplaceFilterTag, MarketplaceProductCard, MarketplaceSearch, MarketplaceSort } from 'components';

const Marketplace: NextPage = () => (
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

        <Flex gap="md" wrap="wrap">
          <MarketplaceProductCard product={{ id: '1111', title: 'asdasd', price: 100, imgUrl: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp' }} />
          <MarketplaceProductCard product={{ id: '1111', title: 'asdasd', price: 100, imgUrl: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp' }} />
          <MarketplaceProductCard product={{ id: '1111', title: 'asdasd', price: 100, imgUrl: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp' }} />
          <MarketplaceProductCard product={{ id: '1111', title: 'asdasd', price: 100, imgUrl: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp' }} />
          <MarketplaceProductCard product={{ id: '1111', title: 'asdasd', price: 100, imgUrl: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp' }} />
          <MarketplaceProductCard product={{ id: '1111', title: 'asdasd', price: 100, imgUrl: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp' }} />
          <MarketplaceProductCard product={{ id: '1111', title: 'asdasd', price: 100, imgUrl: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp' }} />

        </Flex>

        <Pagination mt="xl" size="sm" total={10} value={1} style={{ alignSelf: 'center' }} />
      </Stack>

    </Stack>
  </Group>
);

export default Marketplace;
