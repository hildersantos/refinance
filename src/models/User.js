import { types } from "mobx-state-tree";

import { Account } from "./Account";
import { Transaction } from "./Transaction";
import { values } from "mobx";

export const User = types
  .model({
    id: types.identifier,
    name: types.string,
    accounts: types.optional(types.map(Account), {}),
    transactionRefs: types.optional(
      types.array(types.reference(types.late(() => Transaction))),
      []
    )
  })
  .actions(self => ({
    createAccount: newAccount => {
      self.accounts.set(newAccount.id, newAccount);
    },
    addTransaction: transactionId => {
      self.transactionRefs.push(transactionId);
    }
  }))
  .views(self => ({
    get currentBalance() {
      return values(self.transactionRefs).reduce((sum, t) => {
        if (t.type === "d") return sum - t.value;
        return sum + t.value;
      }, 0);
    }
  }));
