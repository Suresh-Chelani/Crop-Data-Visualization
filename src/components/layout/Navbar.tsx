import { Group, Button } from '@mantine/core';
import { BarChart2, Home, Info, Mail } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <Group justify="space-between">
          <Group>
            <BarChart2 className="text-blue-600" size={28} />
            <span className="text-xl font-semibold">AgriStats</span>
          </Group>
          
          <Group>
            <Button variant="subtle" leftSection={<Home size={18} />}>Home</Button>
            <Button variant="subtle" leftSection={<BarChart2 size={18} />}>Analytics</Button>
            <Button variant="subtle" leftSection={<Info size={18} />}>About</Button>
            <Button variant="filled" leftSection={<Mail size={18} />}>Contact</Button>
          </Group>
        </Group>
      </div>
    </nav>
  );
}