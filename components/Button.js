import React from "react";

function Button({onClick, className, value}) {
  return <button onClick={onClick} value={value}>{value}</button>;
}

module.exports = Button;
