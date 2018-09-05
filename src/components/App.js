import React, { Component } from "react";
import { Menu, Grid, Container, Table } from "semantic-ui-react";
import TransactionView from "./TransactionView";
import AccountView from "./AccountView";
import { observer } from "mobx-react";
import { values } from "mobx";

class App extends Component {
  state = {
    selectedAccount: null
  };
  onSelectAccount = (e, data) => {
    this.setState({
      selectedAccount: data.value
    });
  };
  render() {
    const { user } = this.props;
    const account = user.accounts.get(this.state.selectedAccount);
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
          {account && (
            <Grid.Row>
              <Grid.Column>
                <Table striped>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Type</Table.HeaderCell>
                      <Table.HeaderCell>Description</Table.HeaderCell>
                      <Table.HeaderCell>Value</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {values(account.transactions).map(transaction => (
                      <TransactionView
                        transaction={transaction}
                        key={transaction.id}
                      />
                    ))}
                  </Table.Body>
                </Table>
              </Grid.Column>
            </Grid.Row>
          )}
        </Grid>
      </React.Fragment>
    );
  }
}

export default observer(App);
