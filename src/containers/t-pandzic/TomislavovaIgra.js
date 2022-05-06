import "./TomislavovaIgra.css";
import { useEffect, useState } from "react";
import TomislavCard from "./TomislavCard";
import { Navigate } from "react-router-dom";

// array u kojem se nalaze sve sličice kartice
const cardImages = [
  {
    src: require("./tpandzic-images/helmet-1.png"),
    matched: false,
  },
  {
    src: require("./tpandzic-images/potion-1.png"),
    matched: false,
  },
  {
    src: require("./tpandzic-images/ring-1.png"),
    matched: false,
  },
  {
    src: require("./tpandzic-images/scroll-1.png"),
    matched: false,
  },
  {
    src: require("./tpandzic-images/shield-1.png"),
    matched: false,
  },
  {
    src: require("./tpandzic-images/sword-1.png"),
    matched: false,
  },
];

function TomislavovaIgra({ username, feedback, dodajUHighscore }) {
  // setState koji se poziva na početku svake igre, gdje cards postane prazan array, a turns se resetira na 0
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const [disabled, setDisabled] = useState(null);

  // Funkcija za promiješat karte
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compared 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // reset choices and increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // starts new game on page load
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="Memory-App">
      {username || <Navigate to="/" replace={true} />}
      <h1>Dobrodošao u Memory Game!</h1>
      <button
        className="btn-tome"
        onClick={() => {
          console.log("asd");
          dodajUHighscore("Tomislavova Igra", {
            ime: username,
            rezultat: turns,
          });
        }}
      >
        Spremi rezultat!
      </button>
      <button className="btn-tome" onClick={shuffleCards}>
        New Game
      </button>
      <div className="card-grid">
        {cards.map((card) => (
          <TomislavCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default TomislavovaIgra;
