import { types } from "mobx-state-tree";
import { Transaction } from "./Transaction";

export const Account = types
  .model({
    transactions: types.optional(types.array(Transaction), [])
  })
  .actions(self => ({
    createTransaction: transaction => {
      self.transactions.push(transaction);
    }
  }));
