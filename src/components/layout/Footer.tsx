import { Group, Text } from '@mantine/core';
import { BarChart2, Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Group className="mb-4">
              <BarChart2 className="text-blue-600" size={24} />
              <span className="text-lg font-semibold">AgriStats</span>
            </Group>
            <Text size="sm" c="dimmed">
              Empowering agricultural decisions with data-driven insights and analytics.
            </Text>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <div className="space-y-2">
              <Text size="sm" c="dimmed">Analytics</Text>
              <Text size="sm" c="dimmed">Reports</Text>
              <Text size="sm" c="dimmed">Documentation</Text>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-2">
              <Text size="sm" c="dimmed">About</Text>
              <Text size="sm" c="dimmed">Careers</Text>
              <Text size="sm" c="dimmed">Contact</Text>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <Group>
              <Github size={20} className="text-gray-600 hover:text-gray-900 cursor-pointer" />
              <Twitter size={20} className="text-gray-600 hover:text-gray-900 cursor-pointer" />
              <Linkedin size={20} className="text-gray-600 hover:text-gray-900 cursor-pointer" />
            </Group>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8">
          <Text size="sm" c="dimmed" ta="center">
            © 2024 AgriStats. All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  );
}