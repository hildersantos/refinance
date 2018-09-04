import { types } from "mobx-state-tree";

export const Transaction = types.model({
  value: 0,
  description: ""
});
