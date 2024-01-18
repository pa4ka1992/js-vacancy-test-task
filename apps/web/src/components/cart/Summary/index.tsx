import { FC } from 'react';
import { Button, Divider, Group, Paper, Stack, Text, Title } from '@mantine/core';
import { useRouter } from 'next/router';

import { RoutePath } from 'routes';

import classes from './index.module.scss';

type Props = {
  totalPrice: number
};

const Summary: FC<Props> = ({ totalPrice }) => {
  const router = useRouter();

  return (
    <Paper pos="sticky" top={95} p="md" mt={-40} miw={315} withBorder bg="pure-white" style={{ zIndex: 95 }}>
      <Stack>
        <Title order={3}>Summary</Title>

        <Divider />

        <Group fz="sm" justify="space-between">
          <Text fz="inherit" c="asphalt.9">Total price</Text>

          <Text fz="inherit">
            $
            {totalPrice}
          </Text>
        </Group>

        <Button
          classNames={{
            label: classes.label,
          }}
          onClick={() => router.push(RoutePath.CartPayment)}
        >
          Procced to Checkout

        </Button>
      </Stack>
    </Paper>
  );
};

export default Summary;
