import { FC } from 'react';
import { Group } from '@mantine/core';

import ShopButton from './ShopButton';

const ShopMenu: FC = () => (
  <Group gap="xl">
    <ShopButton label="Marketplace" path="Marketplace" />
    <ShopButton label="Your Products" path="YourProducts" />
  </Group>
);

export default ShopMenu;
