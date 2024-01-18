import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { Group, Table, Text } from '@mantine/core';

import { Buyings } from 'shared';
import { RoutePath } from 'routes';

import { Image } from 'components/shared';
import { HistoryTd, HistoryTh } from './history';
import { PurhaseTd, PurhaseTh } from './purhase';

import classes from './index.module.scss';

type Props = {
  buyings: Buyings[]
};

const ByingsTable: FC<Props> = ({ buyings }) => {
  const path = usePathname();

  const isHistory = path === RoutePath.CartHistory;

  return (
    <Table classNames={{ th: classes.th }} fz="sm" mt="md" verticalSpacing="xs">
      <Table.Thead pos="sticky" top={120} c="asphalt.9" bg="white" style={{ zIndex: 95 }}>
        <Table.Tr
          classNames={{
            tr: classes.trHead,
          }}
        >
          <Table.Th>Item</Table.Th>
          <Table.Th ta="end">Unit Price</Table.Th>

          {isHistory ? <HistoryTh /> : <PurhaseTh />}
        </Table.Tr>
      </Table.Thead>

      <Table.Tbody>
        {buyings.map((product) => (
          <Table.Tr key={product.id}>
            <Table.Td classNames={{
              td: classes.td,
            }}
            >
              <Group gap="sm">
                <Image src={product.imgUrl} alt="product" w={80} width={80} height={80} radius="md" />
                <Text fz="sm" fw={700}>{product.title}</Text>
              </Group>
            </Table.Td>

            <Table.Td ta="end">
              $
              {product.price}
            </Table.Td>

            {isHistory && product.purhaseDate ? <HistoryTd /> : <PurhaseTd count={product.count} />}
          </Table.Tr>
        ))}

      </Table.Tbody>
    </Table>
  );
};

export default ByingsTable;
