import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Box, Group } from '@mantine/core';

import { CartBuyingsTable, CartLayout } from 'components';

import { Buyings } from 'shared';

const History: NextPage = () => {
  const [buyings, setByings] = useState<Buyings[]>([]);

  useEffect(() => {
    setByings([{ id: '1111', title: 'asdasd', price: 100, imgUrl: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp', count: 2, purhaseDate: new Date() },
      { id: '1112', title: 'asdasd', price: 100, imgUrl: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp', count: 2, purhaseDate: new Date() }]);
  }, []);

  return (
    <CartLayout>
      <Group align="flex-start" wrap="nowrap" gap={78}>
        <CartBuyingsTable {...{ buyings }} />

        <Box miw={315} />

      </Group>
    </CartLayout>

  );
};

export default History;
