// Time 20 minutes

const problem = `
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
`;

function add(a, b) {
  let resultado = "";
  let acarreo = 0;

  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || acarreo > 0) {
    let digito1 = i >= 0 ? parseInt(a[i]) : 0;
    let digito2 = j >= 0 ? parseInt(b[j]) : 0;

    let suma = digito1 + digito2 + acarreo;

    resultado = (suma % 10) + resultado;
    acarreo = Math.floor(suma / 10);

    i--;
    j--;
  }

  return resultado;
}
