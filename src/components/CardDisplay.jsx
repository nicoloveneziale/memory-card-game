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
];

export default function CardDisplay() {
  const [cards, setCards] = useState([]);
  const [clicked, setClicked] = useState([]);

  function addToClicked(name) {
    clicked.includes(name)
      ? handleWrongClick()
      : setClicked([...clicked, name]);
  }

  function getRandomCard() {
    return characters[Math.floor(Math.random() * characters.length)];
  }

  useEffect(() => {
    const newCards = [];
    for (let i = 0; i < 8; i++) {
      let newCard = getRandomCard();
      while (newCards.includes(newCard)) {
        newCard = getRandomCard();
      }
      newCards.push(newCard);
    }
    setCards(newCards);
  }, [clicked]);

  return (
    <div id="card-display">
      {cards.map((card, index) => (
        <Card
          key={index}
          name={card.name}
          img={card.img}
          addToClicked={addToClicked}
        ></Card>
      ))}
    </div>
  );
}
