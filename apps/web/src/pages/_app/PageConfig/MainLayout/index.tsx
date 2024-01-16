import { FC, ReactElement } from 'react';
import { AppShell } from '@mantine/core';

import Header from './Header';

import classes from './MainLayout.module.scss';

interface MainLayoutProps {
  children: ReactElement;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <AppShell
    header={{ height: 70 }}
    classNames={classes}
  >
    <Header />

    <AppShell.Main>
      {children}
    </AppShell.Main>
  </AppShell>
);

export default MainLayout;
