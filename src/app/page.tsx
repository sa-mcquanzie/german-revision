'use client'

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import words from "./words";
import { Word } from "./types";

const emojis = [
  {multiplier: 0.75, symbol: "😄"},
  {multiplier: 0.9, symbol: "😊"},
  {multiplier: 1, symbol: "😐"},
  {multiplier: 1.2, symbol: "😕"},
  {multiplier: 1.5, symbol: "😡"},
]

const chooseRandomWord = (wordsArray: Array<any>) => {
  const weightedArray: Array<Word> = [];

  wordsArray.forEach(word => {
    for(let i = 0; i < word.priority; i++) {
      weightedArray.push(word);
    }
  });

  const randomIndex = Math.floor(Math.random() * weightedArray.length);
  const randomWord = weightedArray[randomIndex].german;

  return randomWord;
};

const getTranslation = (word: string, wordsArray: Array<Word>) => {
  const foundWord = wordsArray.find(w => w.german === word);
  return foundWord ? foundWord.english : "";
};

const Home = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [wordShowing, setWordShowing] = useState("");
  const [wordClass, setWordClass] = useState("german");

  const defaultWordsArray = words.map(w => ({...w}));
  let wordsArray = [] as Array<Word>;

  if (typeof window !== 'undefined') {
    wordsArray = (
      JSON.parse(localStorage.getItem('wordsArray') ?? '') || defaultWordsArray
    ) as Array<Word>;
  } else {
    wordsArray = defaultWordsArray;
  }

  const [nextButtonShowing, setNextButtonShowing] = useState(true);
  const [newPriority, setNewPriority] = useState(1);

  useEffect(() => {
    const newWord = chooseRandomWord(wordsArray);

    setCurrentWord(newWord);
    setWordShowing(newWord);
  }, []);

  const clickWord = () => {
    if (!nextButtonShowing) setNextButtonShowing(true);

    if (wordShowing === currentWord) {
      setWordClass("english");
      setWordShowing(getTranslation(currentWord, wordsArray));
    } else {
      setWordClass("german");
      setWordShowing(currentWord);
    }
  };

  const chooseNewWord = () => {
    adjustPriority(currentWord, newPriority);

    const newWord = chooseRandomWord(wordsArray);

    setCurrentWord(newWord);
    setWordShowing(newWord);
    setNextButtonShowing(false);
    setWordClass("german");
    setNewPriority(1);
  };

  const adjustPriority = (word: string, multiplier: number) => {
    const wordIndex = wordsArray.findIndex(w => w.german === word);

    if (wordIndex !== -1) {
        wordsArray[wordIndex].priority *= multiplier;

      if (typeof window !== 'undefined') {
        localStorage.setItem('wordsArray', JSON.stringify(wordsArray));
      }
    }
  };

  const clickEmoji = (multiplier: number) => {
    setNewPriority(multiplier);
  }

  return (
    <div id="pageContainer">
      <div id="wordContainer" onClick={clickWord}>
        <div className={wordClass}>{wordShowing}</div>
      </div>
      <div id="emojiContainer">
        {emojis.map((emoji, index) => (
          <span key={index} onClick={() => clickEmoji(emoji.multiplier)}>{emoji.symbol}</span>
        ))}
      </div>
      <div onClick={chooseNewWord} id="nextButton" style={{visibility: nextButtonShowing ? "visible" : "hidden"}}>
        Next
      </div>

    </div>
  );
}

export default Home;
