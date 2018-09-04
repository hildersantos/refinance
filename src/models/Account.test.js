import { Account } from "./Account";
import { applySnapshot } from "mobx-state-tree";

const initialAccount = Account.create({
  name: "Inter"
});
Date.now = jest.fn(() => 1482363367071);

it("can create an account", () => {
  const account = initialAccount;

  expect(account.transactions.length).toBe(0);
});

it("can create a transaction into an account", () => {
  const account = initialAccount;

  account.createTransaction({
    type: "d",
    value: 1000,
    description: "Despesa",
    date: Date.now()
  });

  expect(account.transactions[0].toJSON()).toEqual({
    type: "d",
    value: 1000,
    description: "Despesa",
    date: Date.now()
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
        description: "Despesa",
        date: Date.now()
      },
      {
        type: "r",
        value: 3000,
        description: "Receita",
        date: Date.now()
      }
    ]
  };

  applySnapshot(account, snapshot);

  expect(account.balance).toBe(2000);
});
