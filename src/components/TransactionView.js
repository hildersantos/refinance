import React from "react";
import { observer } from "mobx-react";
import { Table } from "semantic-ui-react";

const TransactionView = () => (
  <Table.Row>
    <Table.Cell>R</Table.Cell>
    <Table.Cell>A Description</Table.Cell>
    <Table.Cell>R$ 15,00</Table.Cell>
  </Table.Row>
);

export default observer(TransactionView);
