import { Transaction } from "./Transaction";

const initialTransaction = Transaction.create({
  value: 1900,
  description: "Test"
});

it("can create a transaction", () => {
  const transaction = initialTransaction;

  expect(transaction.value).toBe(1900);
  expect(transaction.description).toBe("Test");
});

it("can change transaction value", () => {
  const transaction = initialTransaction;

  transaction.changeValue(2000);
  expect(transaction.value).toBe(2000);

  transaction.changeValue(-1000);
  expect(transaction.value).toBe(-1000);
});

it("can change transaction description", () => {
  const transaction = initialTransaction;

  transaction.changeDescription("New");
  expect(transaction.description).toBe("New");
});
