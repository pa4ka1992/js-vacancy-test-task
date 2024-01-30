import { Flex, Skeleton, TextInput, UnstyledButton } from '@mantine/core';
import { useInputState } from '@mantine/hooks';
import { IconSearch, IconX } from '@tabler/icons-react';
import { FC } from 'react';

const Search: FC = () => {
  const [search, setSearch] = useInputState('');
  const isListLoading = false;
  // const [debouncedSearch] = useDebouncedValue(search, 500);

  return (
    <Skeleton
      radius="sm"
      visible={isListLoading}
      width="auto"
    >
      <TextInput
        size="lg"
        value={search}
        onChange={setSearch}
        placeholder="Type to search..."
        leftSection={<IconSearch size={16} />}
        rightSection={search ? (
          <UnstyledButton
            component={Flex}
            display="flex"
            align="center"
            onClick={() => setSearch('')}
          >
            <IconX />
          </UnstyledButton>
        ) : null}
      />
    </Skeleton>

  );
};

export default Search;
