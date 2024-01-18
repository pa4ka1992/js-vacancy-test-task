import { FC, ReactNode } from 'react';
import { Card, Group, Text, Title, Stack, Box } from '@mantine/core';

import { Product } from 'shared';
import { Image } from 'components/shared';

type Props = {
  product: Product,
  topSlot?: ReactNode,
  bottomSlot?: ReactNode,
  children: ReactNode
};

const ProductCard: FC<Props> = (
  { product: { title, price, imgUrl }, topSlot, bottomSlot, children },
) => (
  <Card padding="none" withBorder radius="lg">
    <Box pos="relative">
      <Image src={imgUrl} alt="product" height={218} width={318} w={318} />

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
    </Box>

    <Stack p="xs" gap={0}>
      <Title mb={12} order={3}>
        {title}
      </Title>

      <Group justify="space-between" mb={22}>
        <Text fz={14} c="asphalt.8">
          Price:
        </Text>
        <Text fw={700}>
          $
          {price}
        </Text>
      </Group>

      {children}
    </Stack>
  </Card>
);

export default ProductCard;
