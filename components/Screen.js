import React from "react";

const Screen = ({value}) => {
  return (
    <h1 className="screen" aria-label="output">
      {value}
    </h1>
  );
};

export default Screen;
