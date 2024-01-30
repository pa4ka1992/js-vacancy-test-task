import { FC } from 'react';
import NextLink from 'next/link';
import { StaticImageData } from 'next/image';
import { Button, Stack, Text, Title } from '@mantine/core';

import { Image } from 'components/shared';
import { RoutePath } from 'routes';

type Props = {
  img: StaticImageData,
  alt: string,
  title: string,
  description: string[]
};

const Payment: FC<Props> = ({ img, alt, title, description }) => (
  <Stack mt={104} align="center">
    <Image src={img} alt={alt} width={56} height={56} />

    <Title order={2} fw={600}>{title}</Title>
    <Text fz="sm" ta="center" c="asphalt.9">
      {description.map((string) => (string || <br />))}
    </Text>

    <Button
      component={NextLink}
      href={RoutePath.Cart}
    >
      Back To Cart
    </Button>
  </Stack>
);

export default Payment;
