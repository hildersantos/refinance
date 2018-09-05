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
        return sum + t.value;
      }, 0);
    }
  }))
  .actions(self => {
    let user;

    return {
      afterAttach: () => {
        user = getParent(self, 2);
      },
      createTransaction: newTransaction => {
        self.transactions.push(newTransaction);

        // Existe um usuário? Se sim, add a transação no array dele
        user && user.addTransaction(newTransaction.id);
      }
    };
  });
