import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Board from "./Board";
const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [stepNumber, setStepNumber] = useState(0);

  const handleSquareClick = (i) => {
    let newHistory = history.slice(0, stepNumber + 1);
    let squareList = [...squares];

    if (winner) {
      alert("game over");
      return;
    }
    if (squareList[i] !== null) {
      alert("click the other one");
      return;
    }
    squareList[i] = isXNext ? "X" : "O";
    setWinner(calculateWinner(squareList));
    setIsXNext(!isXNext);
    setSquares(squareList);
    newHistory.push(squareList);

    setStepNumber(newHistory.length);
    setHistory(newHistory);
  };
  const calculateWinner = (squares) => {
    let winnerCase = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];
    for (let i = 0; i < winnerCase.length; i++) {
      const [a, b, c] = winnerCase[i];
      if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const timeTravel = (index) => {
    setSquares(history[index]);

    setIsXNext(index % 2 == 0);
    setStepNumber(index);
  };
  return (
    <Container>
      <Row>
        <Col md={6}>
          <div>{/* <strong>Winner: {winner}</strong> */}</div>
          <Board handleSquareClick={handleSquareClick} squares={squares} />
        </Col>
        <Col md={6} className="d-flex align-items-center flex-column">
          {winner ? (
            <h2>Winner is:{winner}</h2>
          ) : (
            <h2>NexPlayer is: {isXNext ? `X` : `O`}</h2>
          )}
          <div className="flex-column d-flex">
            {history.map((item, index) => (
              <button onClick={() => timeTravel(index)}>
                {index == 0 ? `GO to start` : `Go to move #: ${index}`}
              </button>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Game;
