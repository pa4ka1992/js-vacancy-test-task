import { FC } from 'react';
import NextLink from 'next/link';
import { Button, Container, Group } from '@mantine/core';

import { RoutePath } from 'routes';
import { usePathname } from 'next/navigation';

const Header: FC = () => {
  const pathname = usePathname();

  const isActive = pathname === RoutePath.Cart;

  return (
    <Container p={0} pos="fixed" fluid bg="white" w="100%" style={{ zIndex: 90 }}>
      <Group gap="xl">
        <Button
          component={NextLink}
          href={RoutePath.Cart}
          size="md"
          p={5}
          c={isActive ? 'black' : 'asphalt.8'}
          color="asphalt.8"
          variant="subtle"
        >
          My Cart
        </Button>
        <Button
          component={NextLink}
          href={RoutePath.CartHistory}
          size="md"
          p={5}
          c={!isActive ? 'black' : 'asphalt.8'}
          color="asphalt.8"
          variant="subtle"
        >
          History
        </Button>
      </Group>

    </Container>
  );
};

export default Header;
