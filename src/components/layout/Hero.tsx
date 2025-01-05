import { Button, Group } from '@mantine/core';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Agricultural Data Analytics for Modern Farming
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Unlock insights from decades of agricultural data to make informed decisions 
            about crop production and yield optimization.
          </p>
          <Group>
            <Button size="lg" rightSection={<ArrowRight size={18} />}>
              Explore Data
            </Button>
            <Button size="lg" variant="light">
              Learn More
            </Button>
          </Group>
        </div>
      </div>
    </div>
  );
}