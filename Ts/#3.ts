// Time 2 minutes

const problem = `Write a function which calculates the average of the numbers in a given array.
Note: Empty arrays should return 0.`;

export function findAverage(array: number[]): number {
  if (array.length === 0) return 0;
  return array.reduce((acc, current) => acc + current) / array.length;
}
