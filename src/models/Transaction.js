import { types } from "mobx-state-tree";
import { Account } from "./Account";

export const Transaction = types
  .model({
    id: types.identifier,
    value: 0,
    description: "",
    type: types.enumeration(["d", "r"]),
    date: types.Date,
    isPaid: false,
    account: types.reference(types.late(() => Account))
  })
  .actions(self => ({
    changeValue: newValue => {
      self.value = newValue;
    },
    changeDescription: newDescription => {
      self.description = newDescription;
    },
    changeType: newType => {
      self.type = newType;
    },
    changeAccount: newAccountId => {
      self.account = newAccountId;
    }
  }));
