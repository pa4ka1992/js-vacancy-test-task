import { FC } from 'react';
import { Group, Select, Skeleton } from '@mantine/core';
import { IconArrowsDownUp, IconChevronDown } from '@tabler/icons-react';

import { SortType } from './constants';

import classes from './index.module.scss';

const Sort: FC = () => {
  // const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC'>('ASC');
  // const [sortType, setSortType] = useState<keyof typeof SortType>('date');

  const isLoading = false;

  return (
    <Group>
      <Skeleton
        radius="sm"
        visible={isLoading}
        width="auto"
      >
        <Select
          w={160}
          classNames={classes}
          size="xs"
          fw="500"
          limit={5}
          defaultValue={SortType.date}
          rightSection={<IconChevronDown size={16} color="var(--mantine-color-asphalt-7)" />}
          rightSectionWidth={30}
          leftSection={<IconArrowsDownUp size={16} color="var(--mantine-color-asphalt-7)" />}
          leftSectionWidth={30}
          data={[SortType.date]}
        />
      </Skeleton>

    </Group>
  );
};

export default Sort;
