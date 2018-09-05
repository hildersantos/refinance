import React, { Component } from "react";
import { Menu, Grid, Container, Table } from "semantic-ui-react";
import TransactionView from "./TransactionView";
import AccountView from "./AccountView";
import { observer } from "mobx-react";
import { values } from "mobx";
import Money from "./Money";

class App extends Component {
  state = {
    selectedAccount: null
  };
  onSelectAccount = (e, data) => {
    // Check current balance
    this.setState({
      selectedAccount: data.value
    });
  };
  render() {
    const { user } = this.props;
    const account = user.accounts.get(this.state.selectedAccount);
    const transactions =
      !account || account === "-1"
        ? user.transactionRefs
        : account.transactions;
    return (
      <React.Fragment>
        <Menu fixed="top" color="black" inverted>
          <Container>
            <Menu.Item header name="refinance" />
          </Container>
        </Menu>
        <Grid container>
          <Grid.Row>
            <Grid.Column>
              <AccountView
                accounts={user.accounts}
                onSelectAccount={this.onSelectAccount}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Table striped>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Account</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Value</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {values(transactions).map(transaction => (
                    <TransactionView
                      transaction={transaction}
                      key={transaction.id}
                    />
                  ))}
                </Table.Body>
                <Table.Footer>
                  <Table.Row>
                    <Table.Cell colSpan="3">
                      Total:{" "}
                      <Money
                        value={
                          account && account.balance
                            ? account.balance
                            : user.currentBalance
                        }
                      />
                    </Table.Cell>
                  </Table.Row>
                </Table.Footer>
              </Table>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default observer(App);
