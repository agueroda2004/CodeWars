const problem = `
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
`;

export const towerBuilder = (nFloors: number) => {
  const result: string[] = [];
  const totalLenght = nFloors * 2 - 1;
  let sum = totalLenght;

  for (let i = nFloors; i > 0; i--) {
    let total = totalLenght - sum;
    let str = " ".repeat(total / 2) + "*".repeat(sum) + " ".repeat(total / 2);
    result.push(str);
    sum -= 2;
  }

  return result.reverse();
};

console.log(towerBuilder(6));
