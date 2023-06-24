import React, { useState, useEffect } from "react";

const WordAnimation = () => {
  const [word, setWord] = useState("");
  const [isWriting, setIsWriting] = useState(true);
  const words = ["Web Designer", "Software Engineer", "Quick Learner"];
  let i = 0;
  const [ targetWord, setTargetWord] = useState(words[i]);

  useEffect(() => {
    let animationTimeout;

    const writeWord = () => {
      const currentWordLength = word.length;

      if (isWriting) {
        if (currentWordLength < targetWord.length) {
          setWord(targetWord.substring(0, currentWordLength + 1));
          animationTimeout = setTimeout(writeWord, 100); // Adjust the delay between letters
        } else {
          setIsWriting(false);
          animationTimeout = setTimeout(writeWord, 1000); // Adjust the delay before erasing
        }
      } else {
        if (currentWordLength > 0) {
          setWord(word.substring(0, currentWordLength - 1));
          animationTimeout = setTimeout(writeWord, 100); // Adjust the delay between erasing letters
        } else {
          i += 1;
          i %= words.length;
          setTargetWord(words[i]);
          setIsWriting(true);
          animationTimeout = setTimeout(writeWord, 1000); // Adjust the delay before writing again
        }
      }
    };

    animationTimeout = setTimeout(writeWord, 300); // Adjust the delay before starting animation

    return () => {
      clearTimeout(animationTimeout);
    };
  }, [word, isWriting]);

  return (
    <div className="animation-container">
      <span className="word">{word}</span>
    </div>
  );
};

export default WordAnimation;
