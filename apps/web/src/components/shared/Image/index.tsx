import { FC } from 'react';
import NextImage from 'next/image';
import { Image as MantineImage, ImageProps } from '@mantine/core';

type Props = ImageProps & {
  alt: string,
  width?: number,
  height?: number
};

const Image: FC<Props> = (props) => (
  <MantineImage component={NextImage} {...props} quality={100} />
);

export default Image;
