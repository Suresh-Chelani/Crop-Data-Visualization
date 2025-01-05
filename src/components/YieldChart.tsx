import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { calculateAverageYields } from '../utils/dataProcessing';
import { cropData } from '../data/cropData';

export function YieldChart() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);
    const averageYields = calculateAverageYields(cropData);

    const option = {
      title: {
        text: 'Average Crop Yields (1950-2020)',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        data: averageYields.map(item => item.crop),
        axisLabel: {
          rotate: 45
        }
      },
      yAxis: {
        type: 'value',
        name: 'Average Yield (Kg/Ha)'
      },
      series: [{
        data: averageYields.map(item => item.averageYield),
        type: 'bar',
        barWidth: '60%'
      }]
    };

    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
}