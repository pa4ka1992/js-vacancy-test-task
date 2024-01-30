import { NextPage } from 'next';
import { StaticImageData } from 'next/image';
import { Box, Button, FileInput, Group, Stack, TextInput, Title } from '@mantine/core';
import { useRef, useState } from 'react';

import { Image } from 'components';

import imgPlaceholder from 'public/images/img-placeholder.png';

import classes from './index.module.scss';

const AddProduct: NextPage = () => {
  const fileInput = useRef<HTMLButtonElement>(null);
  const [imageUrl, setImageUrl] = useState<StaticImageData>(imgPlaceholder);

  const uploadImage = () => {
    if (fileInput.current) {
      fileInput.current.dispatchEvent(new Event('click', { bubbles: true }));
    }
  };

  const uploadProduct = () => {
    setImageUrl(imgPlaceholder);
  };

  return (
    <Box maw={694}>
      <form onSubmit={() => uploadProduct()}>
        <Stack gap="md">
          <Title order={3}>
            Create new product
          </Title>

          <Group>
            <Image src={imageUrl} alt="product" width={180} height={180} />

            <Button onClick={() => uploadImage()} variant="outline" fz={14} color="asphalt.7" c="asphalt.9">
              Upload photo
            </Button>

            <FileInput display="none" ref={fileInput} />
          </Group>

          <TextInput
            classNames={{ label: classes.label }}
            size="sm"
            label="Title of the product"
            placeholder="Enter title of the product"
          />

          <TextInput
            classNames={{ label: classes.label }}
            size="sm"
            label="Price"
            placeholder="Enter price of the product"
          />

          <Button onClick={() => uploadProduct()} fz={14} mt="lg" style={{ alignSelf: 'end' }}>Upload Product</Button>
        </Stack>
      </form>
    </Box>

  );
};

export default AddProduct;
