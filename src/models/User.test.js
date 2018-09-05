import { User } from "./User";

Date.now = jest.fn(() => 1482363367071);
const user = User.create({ name: "Hilder", id: "u1" });

it("can create an user", () => {
  expect(user.name).toBe("Hilder");
});

it("can create an account and have transactions on it", () => {
  const account = {
    name: "Bradesco",
    initialBalance: 150000,
    id: "a1"
  };
  user.createAccount(account);

  expect(user.accounts.get(account.id).name).toBe("Bradesco");

  user.accounts.get(account.id).createTransaction({
    id: "t1",
    description: "Transacao",
    value: 10000,
    type: "d",
    date: Date.now()
  });

  expect(user.transactionRefs.length).toBe(1);
});
