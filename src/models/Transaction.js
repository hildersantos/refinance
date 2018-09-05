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
  .preProcessSnapshot(snapshot => ({
    ...snapshot,
    value: snapshot.type === "d" ? snapshot.value * -1 : snapshot.value * 1
  }))
  .actions(self => ({
    changeValue: newValue => {
      self.value = newValue;
    },
    changeDescription: newDescription => {
      self.description = newDescription;
    },
    changeAccount: newAccountId => {
      self.account = newAccountId;
    },
    changeType: newType => {
      self.type = newType;
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
