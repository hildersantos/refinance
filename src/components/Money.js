import React from "react";

const Money = ({ value }) => (
  <span>R$ {(value / 100).toFixed(2).replace(".", ",")}</span>
);

export default Money;
