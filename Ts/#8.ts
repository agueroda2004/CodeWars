function topKCategories(categories: string[], k: number) {
  const cate: Record<string, number> = {};
  for (const c of categories) {
    cate[c] = (cate[c] ?? 0) + 1;
  }
  return Object.entries(cate)
    .sort((a, b) => b[1] - a[1])
    .map((c) => c[0])
    .slice(0, k);
}

const expenses1 = [
  "comida",
  "transporte",
  "comida",
  "entretenimiento",
  "transporte",
  "comida",
  "servicios",
];
const k1 = 2;
// Output esperado: ["comida", "transporte"]
// Explicación: "comida" aparece 3 veces, "transporte" 2 veces. Las top 2 son esas.

const expenses2 = [
  "suscripciones",
  "suscripciones",
  "salud",
  "suscripciones",
  "ropa",
];
const k2 = 1;

console.log(topKCategories(expenses2, k2));
