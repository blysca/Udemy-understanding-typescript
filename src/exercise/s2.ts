type tBankAccount = { money: number, deposit: (val: number) => void };
type tBankClient = { name: string, bankAccount: tBankAccount, hobbies: string[] };

let bankAccount: tBankAccount = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
};

let myself: tBankClient = {
  name: 'Max',
  bankAccount: bankAccount,
  hobbies: ['Sports', 'Cooking']
};

myself.bankAccount.deposit(3000);

console.log(myself);
