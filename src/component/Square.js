import React, { useState } from "react";

const Square = ({ value, index, handleSquareClick }) => {
  return (
    <div className="square" onClick={() => handleSquareClick(index)}>
      {value}
    </div>
  );
};

export default Square;
