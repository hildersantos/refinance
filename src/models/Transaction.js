import { types } from "mobx-state-tree";

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
    }
  }));
