import { Account } from "./Account";
import { applySnapshot } from "mobx-state-tree";

const initialAccount = Account.create({
  name: "Inter"
});

it("can create an account", () => {
  const account = initialAccount;

  expect(account.transactions.length).toBe(0);
});

it("can create a transaction into an account", () => {
  const account = initialAccount;

  account.createTransaction({
    type: "d",
    value: 1000,
    description: "Despesa"
  });

  expect(account.transactions[0].toJSON()).toEqual({
    type: "d",
    value: 1000,
    description: "Despesa"
  });
});

it("can get account balance", () => {
  const account = initialAccount;

  const snapshot = {
    name: "Inter",
    transactions: [
      {
        type: "d",
        value: 1000,
        description: "Despesa"
      },
      {
        type: "r",
        value: 3000,
        description: "Receita"
      }
    ]
  };

  applySnapshot(account, snapshot);

  expect(account.balance).toBe(2000);
});
