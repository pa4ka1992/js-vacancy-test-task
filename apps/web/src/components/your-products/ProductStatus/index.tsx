import { FC } from 'react';
import { Badge } from '@mantine/core';

import { StatusSetup } from './constants';

type Props = {
  status: keyof typeof StatusSetup
};

const ProductStatus: FC<Props> = ({ status }) => {
  const [statusName, bgColor, textColor] = StatusSetup[status];

  return (
    <Badge
      fz="xs"
      size="lg"
      color={bgColor}
      c={textColor}
      radius="md"
      style={{ textTransform: 'none' }}
    >
      {statusName}
    </Badge>
  );
};

export default ProductStatus;
