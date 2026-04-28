function groupProductCodes(codes: string[]): string[][] {
  const families: Record<string, string[]> = {};
  for (const code of codes) {
    const family = code.split("").sort().join("");
    if (!families[family]) families[family] = [];
    families[family].push(code);
  }
  return Object.values(families);
}

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];

// Output esperado:
// [
//   ["eat", "tea", "ate"],
//   ["tan", "nat"],
//   ["bat"]
// ]

console.log(groupProductCodes(input));
