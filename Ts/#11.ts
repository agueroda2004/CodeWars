interface Transaction {
  id: number;
  userId: number;
  amount: number;
}

interface UserProfile {
  id: number;
  name: string;
}

interface UserReport {
  transactionId: number;
  userName: string;
  amount: number;
}

const transactions: Transaction[] = [
  { id: 101, userId: 1, amount: 150.0 },
  { id: 102, userId: 2, amount: 45.5 },
  { id: 103, userId: 1, amount: 75.25 },
  { id: 104, userId: 3, amount: 300.0 },
  { id: 105, userId: 5, amount: 10.0 }, // Ojo: Usuario 5 no tiene perfil
];

const profiles: UserProfile[] = [
  { id: 1, name: "Daniel" },
  { id: 2, name: "Michelle" },
  { id: 3, name: "Isaac" },
  { id: 4, name: "Rebeca" }, // Ojo: Rebeca no tiene transacciones
];

export function mergeData(
  profiles: UserProfile[],
  transactions: Transaction[],
) {
  const users: Record<number, string> = {};
  const userReport: Array<UserReport> = [];

  for (const user of profiles) {
    users[user.id] = user.name;
  }

  for (const transa of transactions) {
    if (users[transa.userId]) {
      userReport.push({
        transactionId: transa.id,
        userName: users[transa.userId],
        amount: transa.amount,
      });
    }
  }

  return userReport;
}

console.log(mergeData(profiles, transactions));
