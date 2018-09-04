import { Transaction } from "./Transaction";

it("can create a transaction", () => {
  const transaction = Transaction.create({
    value: 1900,
    description: "Test"
  });

  expect(transaction.value).toBe(1900);
  expect(transaction.description).toBe("Test");
});
