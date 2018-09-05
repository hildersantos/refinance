import React, { Component } from "react";
import { observer } from "mobx-react";
import { Select } from "semantic-ui-react";
import { values } from "mobx";

class AccountView extends Component {
  render() {
    const { accounts } = this.props;
    const accountsOptions = values(accounts).reduce(
      (list, account) => [
        ...list,
        {
          text: account.name,
          value: account.id,
          key: account.id
        }
      ],
      []
    );
    return (
      <Select
        placeholder="Selecione uma conta"
        onChange={this.props.onSelectAccount}
        options={[
          { text: "Todas", value: "-1", key: "-1" },
          ...accountsOptions
        ]}
      />
    );
  }
}

export default observer(AccountView);
