import { memo, FC } from 'react';
import { AppShellHeader as LayoutHeader, Container } from '@mantine/core';

import { accountApi } from 'resources/account';

import { Link } from 'components';
import { RoutePath } from 'routes';

import { LogoImage } from 'public/images';

import ShopMenu from './components/ShopMenu';
import AccountMenu from './components/AccountMenu';

import classes from './index.module.scss';

const Header: FC = () => {
  const { data: account } = accountApi.useGet();

  if (!account) return null;

  return (
    <LayoutHeader withBorder={false}>
      <Container className={classes.header} mih={70} px={48} py={0} display="flex" fluid>
        <Link type="router" href={RoutePath.Marketplace} underline={false}>
          <LogoImage />
        </Link>
        <ShopMenu />
        <AccountMenu />
      </Container>
    </LayoutHeader>
  );
};

export default memo(Header);
