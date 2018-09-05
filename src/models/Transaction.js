import { types, getParent } from "mobx-state-tree";

export const Transaction = types
  .model({
    id: types.identifier,
    value: 0,
    description: "",
    type: types.enumeration(["d", "r"]),
    date: types.Date,
    isPaid: false
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
  }))
  .views(self => ({
    get accountName() {
      try {
        return getParent(self, 2).name;
      } catch (error) {
        return;
      }
    },
    get accountId() {
      try {
        return getParent(self, 2).id;
      } catch (error) {
        return;
      }
    }
  }));
