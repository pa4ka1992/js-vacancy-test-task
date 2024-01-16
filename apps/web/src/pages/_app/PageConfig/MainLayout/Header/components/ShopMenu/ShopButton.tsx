import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { Button } from '@mantine/core';
import { Link } from 'components';

import { RoutePath } from 'routes';

type Path = keyof typeof RoutePath;

type Props = {
  label: string,
  path: Path
};

const ShopButton: FC<Props> = ({ label, path }) => {
  const pathname = usePathname();

  const isActive = pathname === RoutePath[path];

  return (
    <Link
      href={RoutePath[path]}
      type="router"
      underline={false}
    >
      <Button
        c={isActive ? 'black' : 'asphalt.8'}
        color={isActive ? 'asphalt' : 'asphalt.8'}
        variant={isActive ? 'filled' : 'subtle'}
        radius="xl"
      >
        {label}
      </Button>
    </Link>
  );
};

export default ShopButton;
