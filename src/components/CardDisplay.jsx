import { useEffect, useState } from "react";
import "../styles/CardDisplay.css";
import Card from "./Card";
import markImg from "../assets/imgs/Mark.png";
import jezImg from "../assets/imgs/Jez.png";
import andyImg from "../assets/imgs/Andy.png";
import bigSuzeImg from "../assets/imgs/Big_suze.png";
import dobImg from "../assets/imgs/Dob.png";
import johnsonImg from "../assets/imgs/Johnson.png";
import sophImg from "../assets/imgs/Soph.png";
import superImg from "../assets/imgs/Super_hans.png";
import darylImg from "../assets/imgs/Dar.png";
import gogImg from "../assets/imgs/Gog.png";

const characters = [
  {
    name: "Mark",
    img: markImg,
  },
  {
    name: "Jez",
    img: jezImg,
  },
  {
    name: "Andy",
    img: andyImg,
  },
  {
    name: "Big Suze",
    img: bigSuzeImg,
  },
  {
    name: "Dobby",
    img: dobImg,
  },
  {
    name: "Johnson",
    img: johnsonImg,
  },
  {
    name: "Sophie",
    img: sophImg,
  },
  {
    name: "Super Hans",
    img: superImg,
  },
  {
    name: "Daryl",
    img: darylImg,
  },
  {
    name: "Gog",
    img: gogImg,
  },
];

export default function CardDisplay({
  gameVisible,
  numberOfCards,
  numberOfRounds,
  handleFinalClick,
}) {
  const [cards, setCards] = useState([]);
  const [clicked, setClicked] = useState([]);

  function addToClicked(name) {
    clicked.includes(name)
      ? handleFinalClick(clicked.length, numberOfRounds)
      : setClicked([...clicked, name]);
    if (clicked.length == numberOfRounds - 1) {
      handleFinalClick(clicked.length, numberOfRounds);
    }
  }

  function getRandomCard() {
    return characters[Math.floor(Math.random() * characters.length)];
  }

  useEffect(() => {
    const newCards = [];
    for (let i = 0; i < numberOfCards; i++) {
      let newCard = getRandomCard();
      while (newCards.includes(newCard)) {
        newCard = getRandomCard();
      }
      newCards.push(newCard);
    }
    setCards(newCards);
  }, [clicked]);

  return (
    <div id="card-display" style={{ display: gameVisible ? "flex" : "hidden" }}>
      <div id="cards-div">
        {cards.map((card, index) => (
          <Card
            key={index}
            name={card.name}
            img={card.img}
            addToClicked={addToClicked}
          ></Card>
        ))}
      </div>
      <h1>
        {clicked.length}/{numberOfRounds}
      </h1>
    </div>
  );
}
