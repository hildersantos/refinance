import React, { Component } from "react";
import { Menu, Grid, Container, Table } from "semantic-ui-react";
import TransactionView from "./TransactionView";

class App extends Component {
  render() {
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
              <Table striped>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Type</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Value</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <TransactionView />
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
