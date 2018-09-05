import { types, getParent } from "mobx-state-tree";
import { values } from "mobx";
import { Transaction } from "./Transaction";

export const Account = types
  .model({
    id: types.identifier,
    name: types.string,
    initialBalance: 0,
    transactions: types.optional(types.array(Transaction), [])
  })
  .views(self => ({
    get balance() {
      return values(self.transactions).reduce((sum, t) => {
        if (t.type === "d") return sum - t.value;
        return sum + t.value;
      }, 0);
    }
  }))
  .actions(self => ({
    createTransaction: newTransaction => {
      self.transactions.push(newTransaction);
      try {
        getParent(self, 2).addTransaction(newTransaction.id);
      } catch (error) {
        return;
      }
    }
  }));
