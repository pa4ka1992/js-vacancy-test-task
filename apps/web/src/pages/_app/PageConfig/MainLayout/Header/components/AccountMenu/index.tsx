import { Link } from 'components';
import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { Button, Group, Indicator } from '@mantine/core';

import { accountApi } from 'resources/account';

import { RoutePath } from 'routes';
import { CartIcon, LogoutIcon } from 'public/icons';

import classes from './index.module.scss';

const AccountMenu: FC = () => {
  const pathname = usePathname();
  const { mutate: signOut } = accountApi.useSignOut();

  const isActive = pathname === RoutePath.Cart;

  return (
    <Group gap="md">
      <Link type="router" href={RoutePath.Cart} underline={false}>
        <Indicator offset={10} inline label="14" size={25}>
          <Button classNames={classes} c={isActive ? 'main-blue' : 'asphalt'} color="asphalt" variant="subtle">
            <CartIcon />
          </Button>
        </Indicator>
      </Link>

      <Button classNames={classes} color="asphalt" variant="subtle" onClick={() => signOut()}>
        <LogoutIcon />
      </Button>
    </Group>
  );
};

export default AccountMenu;
