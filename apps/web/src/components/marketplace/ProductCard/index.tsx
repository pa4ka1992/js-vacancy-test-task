import { FC, ReactNode } from 'react';
import { Card, Group, Text, Title, Box } from '@mantine/core';

import { Product } from 'shared';
import { Image } from 'components/shared';
import { ProductImgSize } from './constants';

type Props = {
  product: Product,
  variant: keyof typeof ProductImgSize,
  topSlot?: ReactNode,
  bottomSlot?: ReactNode,
  children?: ReactNode
};

const ProductCard: FC<Props> = (
  { product: { title, price, imgUrl }, topSlot, bottomSlot, variant, children },
) => (
  <Card withBorder radius="lg">
    <Card.Section pos="relative">

      <Image src={imgUrl} alt="product" width={ProductImgSize[variant][0]} height={ProductImgSize[variant][1]} />

      {topSlot && (
        <Box pos="absolute" top={20} right={20}>
          {topSlot}
        </Box>
      )}

      {bottomSlot && (
        <Box pos="absolute" bottom={20} right={20}>
          {bottomSlot}
        </Box>
      )}
    </Card.Section>

    <Title mt="xs" order={3}>
      {title}
    </Title>

    <Group justify="space-between" mt={12} mb={children ? 22 : 0}>
      <Text fz={14} c="asphalt.8">
        Price:
      </Text>
      <Text fw={700}>
        $
        {price}
      </Text>
    </Group>

    {children}

  </Card>
);

export default ProductCard;
