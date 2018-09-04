import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu fixed="top" color="black" inverted>
          <Menu.Item header name="refinance" />
        </Menu>
      </React.Fragment>
    );
  }
}

export default App;
