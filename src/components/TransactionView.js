import React from "react";
import { observer } from "mobx-react";
import { Table } from "semantic-ui-react";
import Money from "./Money";

const TransactionView = ({ transaction }) => (
  <Table.Row>
    <Table.Cell>{transaction.accountName}</Table.Cell>
    <Table.Cell>{transaction.description}</Table.Cell>
    <Table.Cell textAlign="right">
      <Money value={transaction.value} />
    </Table.Cell>
  </Table.Row>
);

export default observer(TransactionView);
