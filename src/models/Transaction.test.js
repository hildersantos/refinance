import { Transaction } from "./Transaction";

Date.now = jest.fn(() => 1482363367071); // Mock Date
const initialTransaction = Transaction.create({
  value: 1900,
  description: "Test",
  type: "r",
  date: Date.now()
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

it("can change transaction type", () => {
  const transaction = initialTransaction;

  transaction.changeType("d");
  expect(transaction.type).toBe("d");
});
