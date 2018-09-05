import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.css";
import App from "./components/App";
import { Transaction } from "./models/Transaction";

// Models
import { User } from "./models/User";
import { getSnapshot } from "mobx-state-tree";

const user = User.create({
  name: "Hilder",
  id: "u1",
  transactionRefs: ["t1", "t2", "t3"],
  accounts: {
    a1: {
      name: "Inter",
      id: "a1",
      initialBalance: 13400,
      transactions: {
        t1: Transaction.create({
          id: "t1",
          description: "Bolo de Cenoura",
          value: 1000,
          date: new Date("2018-09-04"),
          type: "d",
          account: "a1"
        }),
        t2: Transaction.create({
          id: "t2",
          description: "Pagamento de Serviço",
          value: 100000,
          date: new Date("2018-09-02"),
          type: "r",
          isPaid: true,
          account: "a1"
        })
      }
    },
    a2: {
      name: "Bradesco",
      id: "a2",
      transactions: {
        t3: {
          id: "t3",
          description: "Tarifa",
          value: 699,
          date: new Date("2018-09-01"),
          type: "d",
          isPaid: true,
          account: "a2"
        }
      }
    }
  }
});

console.log(JSON.stringify(getSnapshot(user)));

const renderApp = () =>
  ReactDOM.render(<App user={user} />, document.getElementById("root"));

renderApp();
