import { FC, ReactElement } from 'react';
import { AppShell } from '@mantine/core';

import Header from './Header';
import Footer from './Footer';

import classes from './MainLayout.module.scss';

interface MainLayoutProps {
  children: ReactElement;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <AppShell
    header={{ height: 70 }}
    footer={{ height: 40 }}
    classNames={classes}
  >
    <Header />

    <AppShell.Main>
      {children}
    </AppShell.Main>

    <Footer />
  </AppShell>
);

export default MainLayout;
