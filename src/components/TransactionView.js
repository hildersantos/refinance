import React from "react";
import { observer } from "mobx-react";
import { Table, Label } from "semantic-ui-react";
import Money from "./Money";

const TransactionView = ({ transaction }) => (
  <Table.Row>
    <Table.Cell>{transaction.accountName}</Table.Cell>
    <Table.Cell>{transaction.description}</Table.Cell>
    <Table.Cell>
      <Label color={transaction.type === "d" ? "red" : "green"}>
        <Money value={transaction.value} />
      </Label>
    </Table.Cell>
  </Table.Row>
);

export default observer(TransactionView);
