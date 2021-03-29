import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import Game from "./component/Game";

function App() {
  return (
    <Container>
      <h2>Tic Tac Toe</h2>
      <Game />
    </Container>
  );
}

export default App;
