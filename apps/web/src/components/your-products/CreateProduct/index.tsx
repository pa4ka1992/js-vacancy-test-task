import { FC } from 'react';
import NextLink from 'next/link';
import { Box, Button, Stack, Text } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

import { RoutePath } from 'routes';

import classes from './index.module.scss';

const CreateProduct: FC = () => (
  <Button
    component={NextLink}
    href={RoutePath.AddProduct}
    classNames={{ root: classes.root, label: classes.label }}
    variant="subtle"
    c="main-blue"
  >
    <Stack align="center" gap={12}>
      <Box display="block" className={classes.box} bg="main-blue" p={8}>
        <IconPlus color="white" size={24} />
      </Box>
      <Text>New Product</Text>
    </Stack>
  </Button>
);

export default CreateProduct;
