import { Account } from "./Account";

const initialAccount = Account.create();

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
