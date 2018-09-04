import { types } from "mobx-state-tree";

import { Account } from "./Account";

export const User = types
  .model({
    id: types.identifier,
    name: types.string,
    accounts: types.optional(types.map(Account), {})
  })
  .actions(self => ({
    createAccount: newAccount => {
      self.accounts.set(newAccount.id, newAccount);
    }
  }));
