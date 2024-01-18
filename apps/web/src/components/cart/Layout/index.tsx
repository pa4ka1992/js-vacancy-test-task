import { FC, ReactElement } from 'react';
import { Box } from '@mantine/core';
import Header from './Header';

interface MainLayoutProps {
  children: ReactElement;
}

const Layout: FC<MainLayoutProps> = ({ children }) => (
  <Box>
    <Header />

    <Box pt={40}>
      {children}
    </Box>
  </Box>

);

export default Layout;
