import React, { useState } from "react";
import Square from "./Square";

const Board = ({ handleSquareClick, squares }) => {
  return (
    <div>
      <div className="board">
        {squares.map((item, index) => (
          <Square
            value={item}
            handleSquareClick={handleSquareClick}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
