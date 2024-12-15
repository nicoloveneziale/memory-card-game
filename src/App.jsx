import { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/imgs/Peep_Show_logo.jpg";
import CardDisplay from "./components/CardDisplay";
("./components/CardDisplay");

function App() {
  const [gameVisible, setGameVisible] = useState(false);
  const [cardDisplay, setCardDisplay] = useState(null);
  const [endGameDisplay, setEndGameDisplay] = useState(null);

  function startGame(numberOfCards, numberOfRounds) {
    setGameVisible(true);
    setCardDisplay(
      <CardDisplay
        gameVisible={gameVisible}
        numberOfCards={numberOfCards}
        numberOfRounds={numberOfRounds}
        handleFinalClick={handleFinalClick}
      ></CardDisplay>,
    );
  }

  function handleFinalClick(numClicked, numCards) {
    setCardDisplay(null);
    setEndGameDisplay(
      <div id="game-overview">
        {numCards == numClicked ? <h1>You win!</h1> : <h1>Unlucky!</h1>}
        <h2>
          {numClicked}/{numCards}
        </h2>
        <button
          onClick={() => {
            setEndGameDisplay(null);
            setGameVisible(false);
          }}
        >
          Continue
        </button>
      </div>,
    );
  }

  return (
    <>
      <div id="main">
        <div
          id="start-screen"
          style={{ display: gameVisible ? "none" : "flex" }}
        >
          <div id="logo-div">
            <img src={logo} alt="logo" id="logo" />
            <h1>The Peep Show Memory Game</h1>
          </div>
          <div id="start-div">
            <button onClick={() => startGame(3, 5)}>Easy</button>
            <button onClick={() => startGame(5, 7)}>Medium</button>
            <button onClick={() => startGame(10, 10)}>Hard</button>
          </div>
        </div>
        {cardDisplay}
        {endGameDisplay}
      </div>
      <footer>Made by Nicolo Veneziale</footer>
    </>
  );
}

export default App;
