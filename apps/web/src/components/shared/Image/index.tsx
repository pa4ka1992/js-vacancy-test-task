import { FC } from 'react';
import NextImage from 'next/image';
import { Image as MantineImage, ImageProps } from '@mantine/core';

type Props = ImageProps & {
  alt: string,
  width?: number,
  height?: number
};

const Image: FC<Props> = (props) => {
  const { width, height } = props;

  return <MantineImage component={NextImage} {...props} quality={100} w={width} h={height} />;
};

export default Image;
