import { Account } from "./Account";

// I cannot create an "orphaned" transaction... only can create trough Account.

Date.now = jest.fn(() => 1482363367071); // Mock Date

const account = Account.create({
  name: "Mock",
  id: "a1"
});
account.createTransaction({
  id: "t1",
  value: 1900,
  description: "Test",
  type: "r",
  date: Date.now(),
  isPaid: true
});
const transaction = account.transactions.get("t1");

it("can create a transaction", () => {
  expect(transaction.value).toBe(1900);
  expect(transaction.description).toBe("Test");
});

it("can change transaction value", () => {
  transaction.changeValue(2000);
  expect(transaction.value).toBe(2000);

  transaction.changeValue(-1000);
  expect(transaction.value).toBe(-1000);
});

it("can change transaction description", () => {
  transaction.changeDescription("New");
  expect(transaction.description).toBe("New");
});

it("can change transaction type", () => {
  transaction.changeType("d");
  expect(transaction.type).toBe("d");
});
