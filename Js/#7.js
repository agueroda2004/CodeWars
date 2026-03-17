// Time 10 minutes

const problem = `
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
`;

function pigIt(str) {
  const regexPuntuacion = /[.,\/#!$%\^&\*;:{}=\-_`~()¿¡?]/g;

  return str
    .split(" ")
    .map((wrd) => {
      if (wrd.length == 1) {
        if (regexPuntuacion.test(wrd)) return wrd;
        else return wrd + "ay";
      } else {
        return wrd.slice(1) + wrd[0] + "ay";
      }
    })
    .join(" ");
}
