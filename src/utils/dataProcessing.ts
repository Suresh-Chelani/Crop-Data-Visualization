import { CropData } from '../types/data';

export const cleanData = (data: CropData[]): CropData[] => {
  return data.map(item => ({
    ...item,
    "Crop Production (UOM:t(Tonnes))": item["Crop Production (UOM:t(Tonnes))"] || 0,
    "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] || 0,
    "Area Under Cultivation (UOM:Ha(Hectares))": item["Area Under Cultivation (UOM:Ha(Hectares))"] || 0
  }));
};

export const getYearlyExtremes = (data: CropData[]) => {
  const cleanedData = cleanData(data);
  const yearGroups = cleanedData.reduce((acc, item) => {
    const year = item.Year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(item);
    return acc;
  }, {} as Record<string, CropData[]>);

  return Object.entries(yearGroups).map(([year, crops]) => {
    const productions = crops.map(crop => ({
      name: crop["Crop Name"],
      production: Number(crop["Crop Production (UOM:t(Tonnes))"])
    }));

    const maxProduction = productions.reduce((max, curr) => 
      curr.production > max.production ? curr : max
    , productions[0]);

    const minProduction = productions.reduce((min, curr) => 
      curr.production < min.production ? curr : min
    , productions[0]);

    return {
      year,
      maxCrop: maxProduction.name,
      minCrop: minProduction.name
    };
  });
};

export const calculateAverageYields = (data: CropData[]) => {
  const cleanedData = cleanData(data);
  const cropYields = cleanedData.reduce((acc, item) => {
    const cropName = item["Crop Name"];
    if (!acc[cropName]) {
      acc[cropName] = {
        totalYield: 0,
        count: 0
      };
    }
    acc[cropName].totalYield += Number(item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]);
    acc[cropName].count += 1;
    return acc;
  }, {} as Record<string, { totalYield: number; count: number }>);

  return Object.entries(cropYields).map(([crop, data]) => ({
    crop,
    averageYield: data.totalYield / data.count
  }));
};