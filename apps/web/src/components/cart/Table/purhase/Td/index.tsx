import { FC } from 'react';
import { Button, Group, Table } from '@mantine/core';
import { IconMinus, IconPlus, IconX } from '@tabler/icons-react';

import classes from './index.module.scss';

type Props = {
  count: number
};

const Td: FC<Props> = ({ count }) => (
  <>
    <Table.Td ta="end">
      <Group gap={12} justify="flex-end">
        <Button
          c="asphalt.7"
          h="auto"
          p={5}
          size="xs"
          variant="subtle"
        >
          <IconMinus size={12} stroke={4} />

        </Button>
        {count}
        <Button
          c="asphalt.7"
          h="auto"
          p={5}
          size="xs"
          variant="subtle"
        >
          <IconPlus size={16} stroke={3} />

        </Button>
      </Group>
    </Table.Td>
    <Table.Td ta="end">
      <Button
        classNames={{
          section: classes.removeButtonSection,
          label: classes.removeButtonLabel,
        }}
        c="asphalt.9"
        h="auto"
        p={5}
        size="xs"
        variant="subtle"
        leftSection={<IconX size={16} />}
      >
        Remove

      </Button>
    </Table.Td>
  </>

);

export default Td;
