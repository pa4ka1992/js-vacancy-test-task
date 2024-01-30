import { FC } from 'react';
import { Button, Group, Paper, Stack, Text, TextInput, Title } from '@mantine/core';
import { IconX } from '@tabler/icons-react';

import classes from './index.module.scss';

const Filter: FC = () => (
  <Paper p="md" withBorder maw="315px">
    <Group align="center" justify="space-between">
      <Title order={3}>Filters</Title>

      <Button
        classNames={{
          section: classes.clearButton,
        }}
        p={5}
        variant="subtle"
        c="asphalt.8"
        color="asphalt.8"
        size="xs"
        rightSection={<IconX size={16} />}
      >
        Reset All

      </Button>

    </Group>

    <Stack mt="xl">
      <Title order={4}>
        Price
      </Title>

      <Group gap="xs" wrap="nowrap">
        <TextInput
          classNames={{
            input: classes.input,
          }}
          fz="xs"
          fw={500}
          size="sm"
          leftSection={<Text size="xs">From:</Text>}
          leftSectionWidth={50}
          rightSection={<Text size="xs">$</Text>}
        />

        <TextInput
          classNames={{
            input: classes.input,
          }}
          fz="xs"
          fw={500}
          size="sm"
          leftSection={<Text size="xs">To:</Text>}
          rightSection={<Text size="xs">$</Text>}
        />
      </Group>

    </Stack>

  </Paper>
);

export default Filter;
