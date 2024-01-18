import { FC } from 'react';
import NextLink from 'next/link';
import { Button, Stack, Text, Title } from '@mantine/core';

import { Image } from 'components/shared';

import { RoutePath } from 'routes';

import emptyCart from 'public/images/empty-cart.png';

const Empty: FC = () => (
  <Stack mt={40} align="center" gap="md">
    <Image src={emptyCart} alt="cart-empty" w={206} width={206} height={206} />

    <Title order={3}>Oops, there`s nothing here yet!</Title>

    <Text maw={300} ta="center" fz="xs" c="asphalt.9">
      You haven`t made any purchases yet.
      <br />
      Go to the marketplace and make purchases.
    </Text>

    <Button
      component={NextLink}
      href={RoutePath.Marketplace}
    >
      Go to Marketplace
    </Button>

  </Stack>
);

export default Empty;
