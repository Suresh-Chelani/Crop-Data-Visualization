import { Grid } from '@mantine/core';
import { Sprout, TrendingUp, Scale, Wheat } from 'lucide-react';
import { DataCard } from './DataCard';
import { CropTable } from './CropTable';
import { YieldChart } from './YieldChart';
import { cropData } from '../../data/cropData';

export function AnalyticsSection() {
  const totalCrops = new Set(cropData.map(d => d["Crop Name"])).size;
  const avgYield = Math.round(
    cropData.reduce((acc, curr) => acc + Number(curr["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]) || 0, 0) / 
    cropData.length
  );

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Agricultural Insights</h2>
        
        <Grid className="mb-8">
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <DataCard
              title="Total Crops"
              value={totalCrops}
              description="Unique crop varieties tracked"
              icon={<Wheat size={24} />}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <DataCard
              title="Average Yield"
              value={`${avgYield} Kg/Ha`}
              description="Average yield across all crops"
              icon={<Scale size={24} />}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <DataCard
              title="Growth Rate"
              value="12.5%"
              description="Year-over-year production growth"
              icon={<TrendingUp size={24} />}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <DataCard
              title="Cultivation Area"
              value="698.1 Ha"
              description="Total area under cultivation"
              icon={<Sprout size={24} />}
            />
          </Grid.Col>
        </Grid>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Production Analysis</h3>
            <CropTable />
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Yield Trends</h3>
            <YieldChart />
          </div>
        </div>
      </div>
    </div>
  );
}