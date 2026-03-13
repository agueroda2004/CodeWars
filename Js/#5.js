//

const problem = `
`;

function pickPeaks(arr) {
  const result = { pos: [], peaks: [] };
  let posCanditato = {
    pos: 0,
    num: 0,
    isValid: false,
  };
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      posCanditato.num = arr[i];
      posCanditato.pos = i;
      posCanditato.isValid = true;
    } else if (arr[i] < arr[i - 1]) {
      if (posCanditato.isValid) {
        result.peaks.push(posCanditato.arr[i]);
        result.pos.push(posCanditato.pos);
        posCanditato.isValid = false;
      }
    }
  }
  return result;
}
