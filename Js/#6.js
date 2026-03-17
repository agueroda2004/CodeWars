// Time 30 minutes

const problem = `
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
`;

function solution(text, markers) {
  if (markers.length == 0) return text.trimEnd();
  let isInclude = false;
  const result = text
    .split("\n")
    .map((wrd) => {
      let index = 0;
      for (w of wrd) {
        if (markers.includes(w)) {
          index = wrd.indexOf(w);
          isInclude = true;
          break;
        }
      }
      if (!isInclude) {
        return wrd.trimEnd();
      } else {
        isInclude = false;
        return wrd.slice(0, index).trimEnd();
      }
    })
    .join("\n");

  return result;
}
