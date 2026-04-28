function findReconciliationPair(transactions: number[], target: number) {
  const memoria: Record<number, number> = {};

  for (const [index, num] of transactions.entries()) {
    let haceFalta = target - num;
    if (memoria[haceFalta] !== undefined) {
      return [memoria[haceFalta], index];
    } else {
      memoria[num] = index;
    }
  }
  return [];
}

console.log(findReconciliationPair([10, 25, 30, 45, 50], 75));
