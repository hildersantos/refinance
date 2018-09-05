import { Account } from "./Account";
import { Transaction } from "./Transaction";
import { applySnapshot, getSnapshot } from "mobx-state-tree";
import { values } from "mobx";

const initialAccount = Account.create({
  id: "a1",
  name: "Inter"
});
Date.now = jest.fn(() => 1482363367071);

it("can create an account", () => {
  const account = initialAccount;

  expect(values(account.transactions).length).toBe(0);
});

it("can create a transaction into an account", () => {
  const account = initialAccount;

  account.createTransaction({
    id: "t1",
    type: "d",
    value: 1000,
    description: "Despesa",
    date: Date.now()
  });

  expect(getSnapshot(account)).toMatchSnapshot();
});

it("can get account balance", () => {
  const account = initialAccount;

  const snapshot = {
    name: "Inter",
    id: "a1",
    transactions: [
      {
        id: "t1",
        type: "d",
        value: 1000,
        description: "Despesa",
        date: Date.now(),
        account: "a1"
      },
      {
        id: "t2",
        type: "r",
        value: 3000,
        description: "Receita",
        date: Date.now(),
        account: "a1"
      }
    ]
  };

  applySnapshot(account, snapshot);

  expect(account.balance).toBe(2000);
});
