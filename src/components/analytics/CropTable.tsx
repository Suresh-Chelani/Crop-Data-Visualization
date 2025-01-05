import { Table } from '@mantine/core';
import { getYearlyExtremes } from '../../utils/dataProcessing';
import { cropData } from '../../data/cropData';

export function CropTable() {
  const yearlyData = getYearlyExtremes(cropData);

  return (
    <Table striped highlightOnHover>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Year</Table.Th>
          <Table.Th>Crop with Maximum Production</Table.Th>
          <Table.Th>Crop with Minimum Production</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {yearlyData.map((row) => (
          <Table.Tr key={row.year}>
            <Table.Td>{row.year}</Table.Td>
            <Table.Td>{row.maxCrop}</Table.Td>
            <Table.Td>{row.minCrop}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}