import { Group } from '@mantine/core';
import { NextPage } from 'next';

import { CartLayout, CartSummary, CartBuyingsTable, CartEmpty } from 'components';

import { Buyings } from 'shared';
import { useEffect, useState } from 'react';

const Cart: NextPage = () => {
  const [buyings, setByings] = useState<Buyings[]>([]);

  useEffect(() => {
    setByings([{ id: '1111', title: 'asdasd', price: 100, imgUrl: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp', count: 2 },
      { id: '1112', title: 'asdasd', price: 100, imgUrl: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp', count: 2 }]);
  }, []);

  return (
    <CartLayout>

      {!buyings.length ? <CartEmpty /> : (
        <Group align="flex-start" wrap="nowrap" gap={78}>
          <CartBuyingsTable {...{ buyings }} />

          <CartSummary totalPrice={1000} />
        </Group>
      )}

    </CartLayout>
  );
};

export default Cart;
