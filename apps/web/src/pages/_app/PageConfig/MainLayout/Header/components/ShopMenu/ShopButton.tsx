import { FC } from 'react';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import { Button } from '@mantine/core';

import { RoutePath } from 'routes';

type Path = keyof typeof RoutePath;

type Props = {
  label: string,
  path: Path
};

const ShopButton: FC<Props> = ({ label, path }) => {
  const pathname = usePathname();

  const isActive = pathname.includes(RoutePath[path]);

  return (
    <Button
      component={NextLink}
      href={RoutePath[path]}
      c={isActive ? 'black' : 'asphalt.8'}
      color={isActive ? 'asphalt' : 'asphalt.8'}
      variant={isActive ? 'filled' : 'subtle'}
      radius="xl"
    >
      {label}
    </Button>
  );
};

export default ShopButton;
