import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { Button, Group, Indicator } from '@mantine/core';

import { accountApi } from 'resources/account';

import { RoutePath } from 'routes';
import { CartIcon, LogoutIcon } from 'public/icons';

import classes from './index.module.scss';

const AccountMenu: FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { mutate: signOut } = accountApi.useSignOut();

  const isActive = pathname === RoutePath.Cart;

  return (
    <Group gap="xl" align="center">
      <Indicator offset={10} inline label="14" size={25}>
        <Button
          h="auto"
          classNames={classes}
          c={isActive ? 'main-blue' : 'asphalt.9'}
          color="asphalt.8"
          variant="subtle"
          onClick={() => router.push(RoutePath.Cart)}
        >
          <CartIcon />
        </Button>
      </Indicator>

      <Button
        h="auto"
        classNames={classes}
        c="asphalt.9"
        color="asphalt.8"
        variant="subtle"
        onClick={() => signOut()}
      >
        <LogoutIcon />
      </Button>
    </Group>
  );
};

export default AccountMenu;
