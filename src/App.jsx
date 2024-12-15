import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import logo from "./assets/imgs/Peep_Show_logo.jpg";
import markImg from "./assets/imgs/Mark.png";
import jezImg from "./assets/imgs/Jez.png";

const characters = [
  {
    name: "Mark",
    img: markImg,
  },
  {
    name: "Jez",
    img: jezImg,
  },
];

function App() {
  const [clicked, setClicked] = useState({});
  const [gameStarted, setGameStarted] = useState(false);
  const [cardsToRender, setCardsToRender] = useState([]);

  function addToClicked(name) {
    clicked.has(name) ? handleWrongClick() : setClicked({ ...clicked, name });
  }

  function startGame(cards) {
    setGameStarted(true);
  }

  return (
    <>
      <div id="main">
        <div
          id="start-screen"
          style={{ display: gameStarted ? "none" : "flex" }}
        >
          <div id="logo-div">
            <img src={logo} alt="logo" id="logo" />
            <h1>The Peep Show Memory Game</h1>
          </div>
          <div id="start-div">
            <button onClick={() => startGame(6)}>Easy</button>
            <button onClick={() => startGame(8)}>Medium</button>
            <button onClick={() => startGame(10)}>Hard</button>
          </div>
          <div
            id="cards-div"
            style={{ display: gameStarted ? "flex" : "none" }}
          >
            {cardsToRender.map((card) => card)}
          </div>
        </div>
      </div>
      <footer>Made by Nicolo Veneziale</footer>
    </>
  );
}

export default App;
