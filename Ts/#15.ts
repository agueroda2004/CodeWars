export function duplicateEncode(word: string) {
  const object: Record<string, number> = {};

  for (let i = 0; i < word.length; i++) {
    let w = word[i].toLowerCase();
    object[w] = (object[w] ?? 0) + 1;
  }

  return [...word.toLowerCase()]
    .map((w) => (object[w] > 1 ? ")" : "("))
    .join("");
}

console.log(duplicateEncode("recede"));
