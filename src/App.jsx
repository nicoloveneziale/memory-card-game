import { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/imgs/Peep_Show_logo.jpg";
import CardDisplay from "./components/CardDisplay";
("./components/CardDisplay");

function App() {
  const [clicked, setClicked] = useState({});
  let gameStarted = false;

  function startGame(numberOfCards) {
    gameStarted = true;
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
        </div>
        <CardDisplay
          style={{ display: gameStarted ? "none" : "flex" }}
        ></CardDisplay>
      </div>
      <footer>Made by Nicolo Veneziale</footer>
    </>
  );
}

export default App;
