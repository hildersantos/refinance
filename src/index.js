import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.css";
import App from "./components/App";

// Models
import { User } from "./models/User";

const user = User.create({
  name: "Hilder",
  id: "u1",
  transactionRefs: ["t1", "t2", "t3"],
  accounts: {
    a1: {
      name: "Inter",
      id: "a1",
      initialBalance: 13400,
      transactions: [
        {
          id: "t1",
          description: "Bolo de Cenoura",
          value: 1000,
          date: new Date("2018-09-04"),
          type: "d",
          account: "a1"
        },
        {
          id: "t2",
          description: "Pagamento de Serviço",
          value: 100000,
          date: new Date("2018-09-02"),
          type: "r",
          isPaid: true,
          account: "a1"
        }
      ]
    },
    a2: {
      name: "Bradesco",
      id: "a2",
      transactions: [
        {
          id: "t3",
          description: "Tarifa",
          value: 699,
          date: new Date("2018-09-01"),
          type: "d",
          isPaid: true,
          account: "a2"
        }
      ]
    }
  }
});

const renderApp = () =>
  ReactDOM.render(<App user={user} />, document.getElementById("root"));

renderApp();
