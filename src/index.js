import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.css";
import App from "./components/App";

// Models
import { User } from "./models/User";

const user = User.create({
  name: "Hilder",
  id: "u1",
  accounts: {
    a1: {
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
    }
  }
});

ReactDOM.render(<App user={user} />, document.getElementById("root"));
