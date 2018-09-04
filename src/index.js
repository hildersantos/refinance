import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.css";
import App from "./components/App";

// Models
import { Account } from "./models/Account";

const account = Account.create({
  name: "Inter",
  id: "a1",
  initialBalance: 13400,
  transactions: {
    t1: {
      id: "t1",
      name: "Bolo de Cenoura",
      value: 1000,
      date: new Date("2018-09-04"),
      type: "d"
    },
    t2: {
      id: "t2",
      name: "Pagamento de Serviço",
      value: 100000,
      date: new Date("2018-09-02"),
      type: "d",
      isPaid: true
    }
  }
});

ReactDOM.render(<App account={account} />, document.getElementById("root"));
