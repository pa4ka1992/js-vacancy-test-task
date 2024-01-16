import { FC, useState } from 'react';
import { Button, Card, Group, Text, Title, Image, Stack } from '@mantine/core';

import { Product } from 'shared';

type Props = {
  product: Product
};

const ProductCard: FC<Props> = ({ product: { title, price, imgUrl } }) => {
  const [isInCart, setIsInCart] = useState(false);

  return (
    <Card padding="none" withBorder>
      <Image src={imgUrl} h={218} w={318} fit="contain" />

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

        <Button radius={8} onClick={() => setIsInCart(!isInCart)}>
          {isInCart ? 'Add to Cart' : 'In Cart'}
        </Button>
      </Stack>
    </Card>
  );
};

export default ProductCard;
