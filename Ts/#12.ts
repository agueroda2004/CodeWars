function mergeIntervals(intervals: number[][]) {
  const ordered = intervals.sort((a, b) => a[0] - b[0]);
  const response: number[][] = [];
  response.push(ordered[0]);

  for (let i = 1; i < ordered.length; i++) {
    if (response[response.length - 1][1] > ordered[i][0]) {
      response[response.length - 1][1] =
        ordered[i][1] > response[response.length - 1][1]
          ? ordered[i][1]
          : response[response.length - 1][1];
    } else {
      response.push(ordered[i]);
    }
  }
  return response;
}

const inputs = [
  [1, 6],
  [2, 3],
  [2, 5],
  [8, 10],
  [15, 18],
];

// Output esperado: [[1, 6], [8, 10], [15, 18]]
// Explicación: [1, 3] y [2, 6] se solapan, así que se fusionan en [1, 6].

console.log(mergeIntervals(inputs));
