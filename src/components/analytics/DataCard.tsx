import { Card, Text, Group } from '@mantine/core';

interface DataCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
}

export function DataCard({ title, value, description, icon }: DataCardProps) {
  return (
    <Card withBorder shadow="sm" radius="md" className="hover:shadow-md transition-shadow">
      <Group className="mb-3">
        <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
          {icon}
        </div>
      </Group>
      <Text size="lg" fw={500} className="mb-1">{title}</Text>
      <Text size="xl" fw={700} className="mb-2">{value}</Text>
      <Text size="sm" c="dimmed">{description}</Text>
    </Card>
  );
}