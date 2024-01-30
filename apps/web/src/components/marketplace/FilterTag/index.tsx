import { FC } from 'react';
import { Button, Group, Paper, Text } from '@mantine/core';
import { IconX } from '@tabler/icons-react';

type Props = { label: string };

const FilterTag: FC<Props> = ({ label }) => (
  <Paper withBorder radius="xl" px="md" py={10} color="white" c="black">
    <Group gap={8}>
      <Text fz="xs" fw="500">
        {label}
      </Text>

      <Button p={0} c="white" color="asphalt.8" h={16} radius={100} size="xs">
        <IconX size={14} fontWeight={700} />
      </Button>
    </Group>
  </Paper>
);
export default FilterTag;
