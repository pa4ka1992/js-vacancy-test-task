import { Button } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';
import { FC } from 'react';

const DeleteProduct: FC = () => (
  <Button px={4} color="asphalt.6" c="asphalt.9">
    <IconTrash stroke={1} size={24} />
  </Button>
);

export default DeleteProduct;
