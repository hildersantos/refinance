import { User } from "./User";

const user = User.create({ name: "Hilder", id: "u1" });

it("can create an user", () => {
  expect(user.name).toBe("Hilder");
});

it("can create an account", () => {
  const account = user.createAccount({
    name: "Bradesco",
    initialBalance: 150000,
    id: "a1"
  });
});
