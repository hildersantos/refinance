import React from "react";

const Money = ({ value }) => (
  <div>R$ {(value / 100).toFixed(2).replace(".", ",")}</div>
);

export default Money;
