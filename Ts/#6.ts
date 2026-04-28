interface Transaction {
  userId: string;
  amount: number;
}

function findUsersInDebt(transactions: Transaction[]) {
  const users: Record<string, number> = {};
  for (const tran of transactions) {
    users[tran.userId] += (users[tran.userId] ?? 0) + tran.amount;
  }
  return Object.entries(users)
    .filter((u) => u[1] < 0)
    .map((u) => u[0])
    .sort();
}

const logs = [
  { userId: "user_B", amount: 150 },
  { userId: "user_A", amount: -200 },
  { userId: "user_C", amount: 50 },
  { userId: "user_B", amount: -200 },
  { userId: "user_A", amount: 100 },
  { userId: "user_C", amount: -10 },
];
console.log(findUsersInDebt(logs)); // Debería imprimir: ["user_A", "user_B"]
