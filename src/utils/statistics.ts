// Function to ensure that values are numbers (handles strings and NaN values)
function ensureNumber(value: any): number | undefined {
  if (typeof value === "number") {
    return value; // If it's already a number, return it
  } else if (typeof value === "string") {
    const numericValue = parseFloat(value);
    return isNaN(numericValue) ? undefined : numericValue; // Convert string to number
  } else {
    return undefined; // If it's not a string or number, return undefined
  }
}

// Function to calculate the mean of an array of numbers
export function calculateMean(data: number[]): number {
  const numericData = data.map(ensureNumber).filter((val) => val !== undefined) as number[];
  if (numericData.length === 0) {
    return 0; // Default value if there are no valid numeric values
  }
  const sum = numericData.reduce((acc, val) => acc + val, 0);
  const mean = sum / numericData.length;
  return Math.round(mean * 1000) / 1000; // Round to 3 decimal places
}

// Function to calculate the median of an array of numbers
export function calculateMedian(data: number[]): number {
  const sortedData = [...data].sort((a, b) => a - b);
  const middle = Math.floor(sortedData.length / 2);
  if (sortedData.length % 2 === 0) {
    const median = (sortedData[middle - 1] + sortedData[middle]) / 2;
    return Math.round(median * 1000) / 1000; // Round to 3 decimal places
  } else {
    return Math.round(sortedData[middle] * 1000) / 1000; // Round to 3 decimal places
  }
}

// Function to calculate the mode of an array of numbers
export function calculateMode(data: number[]): number[] {
  const counts = new Map<number, number>();
  let maxCount = 0;
  let modes: number[] = [];

  for (const num of data) {
    const currentCount = (counts.get(num) || 0) + 1;
    counts.set(num, currentCount);

    if (currentCount > maxCount) {
      maxCount = currentCount;
      modes = [num];
    } else if (currentCount === maxCount) {
      modes.push(num);
    }
  }

  return modes;
}

// Function to calculate Gamma
export function calculateGamma(data: any[]) {
  return data.map((item) => {
    const { Ash, Hue, Magnesium } = item;
    return {
      ...item,
      Gamma: (Ash * Hue) / Magnesium,
    };
  });
}

// Function to calculate Class-wise Statistics
export const calculateClassWiseStatistics = (data: any[], propertyName: string): { [key: string]: { Mean: number; Median: number; Mode: number | number[] } } => {
  const classes = Array.from(new Set(data.map((item) => item.Alcohol)));
  const statistics: { [key: string]: { Mean: number; Median: number; Mode: number | number[] } } = {};

  classes.forEach((cls) => {
    const filteredData = data.filter((item) => item.Alcohol === cls);
    const values = filteredData.map((item) => item[propertyName]);
    statistics[`Class ${cls}`] = {
      Mean: calculateMean(values),
      Median: calculateMedian(values),
      Mode: calculateMode(values),
    };
  });

  return statistics;
};
