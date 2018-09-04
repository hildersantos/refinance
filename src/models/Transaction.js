import { types } from "mobx-state-tree";

export const Transaction = types
  .model({
    value: 0,
    description: "",
    type: types.enumeration(["d", "r"]),
    date: types.Date
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
