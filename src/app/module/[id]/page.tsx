'use client'

import { useEffect, useState } from "react";
import modules from "../../modules";
import { Card } from "../../types";
import Link from "next/link";

const emojis = [
  {multiplier: 0.75, symbol: "😄"},
  {multiplier: 0.9, symbol: "😊"},
  {multiplier: 1, symbol: "😐"},
  {multiplier: 1.2, symbol: "😕"},
  {multiplier: 1.5, symbol: "😡"},
]

const chooseRandomCard = (cardsArray: Array<any>) => {
  const weightedArray: Array<Card> = [];

  cardsArray.forEach(card => {
    for(let i = 0; i < card.priority; i++) {
      weightedArray.push(card);
    }
  });

  const randomIndex = Math.floor(Math.random() * weightedArray.length);
  const randomCard = weightedArray[randomIndex].german;

  return randomCard;
};

const getTranslation = (card: string, cardsArray: Array<Card>) => {
  const foundCard = cardsArray.find(w => w.german === card);
  return foundCard ? foundCard.english : "";
};

const Page = ({ params }: { params: { id: string } }) => {
  const [currentCard, setCurrentCard] = useState("");
  const [cardShowing, setCardShowing] = useState("");
  const [cardClass, setCardClass] = useState("german");
  const [nextButtonShowing, setNextButtonShowing] = useState(true);
  const [newPriority, setNewPriority] = useState(1);

  const moduleCards = modules.find((mod) => mod.id === params.id)?.cards

  if (!moduleCards || moduleCards.length === 0) return <>No cards found for module {params.id}</>

  const defaultCardsArray = moduleCards.map(w => ({...w}));

  let cardsArray = defaultCardsArray;

  if (typeof window !== 'undefined') {
    const storedCardsArray = localStorage.getItem(`module${params.id}cardsArray`);
    
    if (storedCardsArray) {
      try {
        const parsedArray = JSON.parse(storedCardsArray);

        if (Array.isArray(parsedArray) && parsedArray.length > 0) {
          cardsArray = parsedArray;
        }
      } catch (error) {
        console.error('Error parsing stored cards array:', error);
      }
    }
  }

  useEffect(() => {
    const newCard = chooseRandomCard(cardsArray);

    setCurrentCard(newCard);
    setCardShowing(newCard);
  }, []);

  const clickCard = () => {
    if (!nextButtonShowing) setNextButtonShowing(true);

    if (cardShowing === currentCard) {
      setCardClass("english");
      setCardShowing(getTranslation(currentCard, cardsArray));
    } else {
      setCardClass("german");
      setCardShowing(currentCard);
    }
  };

  const chooseNewCard = () => {
    adjustPriority(currentCard, newPriority);

    const newCard = chooseRandomCard(cardsArray);

    setCurrentCard(newCard);
    setCardShowing(newCard);
    setNextButtonShowing(false);
    setCardClass("german");
    setNewPriority(1);
  };

  const adjustPriority = (card: string, multiplier: number) => {
    const cardIndex = cardsArray.findIndex(w => w.german === card);

    if (cardIndex !== -1) {
        cardsArray[cardIndex].priority *= multiplier;

      if (typeof window !== 'undefined') {
        localStorage.setItem(`module${params.id}cardsArray`, JSON.stringify(cardsArray));
      }
    }
  };

  const clickEmoji = (multiplier: number) => {
    setNewPriority(multiplier);
  }

  return (
    <div id="pageContainer">
      <div
        id="pageTopContainer"
        onClick={clickCard}
        style={{
          cursor: cardClass === "german" ? "help" : "default"
        }}
      >
        <div id="cardContainer">
          <div className={cardClass}>{cardShowing}</div>
        </div>
      </div>
      <div id="pageBottomContainer">
        <div id="emojiContainer">
          {emojis.map((emoji, index) => (
            <span
              key={index}
              className="emoji"
              onClick={() => clickEmoji(emoji.multiplier)}
            >
              {emoji.symbol}
            </span>
          ))}
        </div>
        <div id="nextButtonContainer">
          <div onClick={chooseNewCard} id="nextButton" style={{
            visibility: nextButtonShowing ? "visible" : "hidden",
            cursor: nextButtonShowing ? "pointer" : "none"
          }}>
            Next
          </div>
        </div>
        <div id="homeButtonContainer">
          <Link href='/'>Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
