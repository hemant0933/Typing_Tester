import React, { createRef, useMemo, useEffect, useRef, useState } from "react";
import { generate } from "random-words";

// var randomWords = require('random-words');
const TypingBox = () => {
  const inputRef = useRef(null);

  const [currWordIndex, setcurrWordIndex] = useState(0);
  const [currCharIndex, setcurrCharIndex] = useState(0);

  const [wordsArray, setWordsArray] = useState(() => {
    return generate(50);
  });

  const wordsSpanRef = useMemo(() => {
    return Array(wordsArray.length)
      .fill(0)
      .map((i) => createRef(null));
  }, [wordsArray]);

  //useRef is a hook and can only be used in func. based comp.
  //createRef is function and can only be used in callback function.

  const handleUserInput = (e) => {
    
    const allCurrChars = wordsSpanRef[currWordIndex].current.childNodes;

    if(e.keyCode === 32){

      if(allCurrChars.length <= currCharIndex){
        //remove cursor from last place in a word
        allCurrChars[currCharIndex-1].classList.remove('current_right');
      }
      else{
        //remove cursor from in between of the word
        allCurrChars[currCharIndex].classList.remove('current');
      }
      // Logic for SpaceBar
      wordsSpanRef[currWordIndex+1].current.childNodes[0].className = 'current_right';
      setcurrWordIndex(currWordIndex+1);
      setcurrCharIndex(0);
      return ;
    }

    if (e.key === allCurrChars[currCharIndex].innerText) {
      // console.log("correctInput")
      allCurrChars[currCharIndex].className = "correct";
    } 
    else {
      allCurrChars[currCharIndex].className = "incorrect";
      allCurrChars[currCharIndex].classList.add("current"); // Add blink class to wrong character

      return ;
    }

    if (currCharIndex + 1 === allCurrChars.length) {
      allCurrChars[currCharIndex].className += " current_right";
    } 
    else {
      allCurrChars[currCharIndex + 1].className = "current"; // for moving cursor
    }

    setcurrCharIndex(currCharIndex + 1);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };
  //here when ever our page gets render the input become in focus mode
  //means when the cursor start blinking

  useEffect(() => {
    focusInput();
    wordsSpanRef[0].current.childNodes[0].className = "current";
  }, []);

  return (
    <div>
      <div className="textBox" onClick={focusInput}>
        <div className="words">
          {wordsArray.map((word, index) => (
            <span className="word" ref={wordsSpanRef[index]}>
              {word.split("").map((char) => (
                <span>{char}</span>
              ))}
            </span>
          ))}
        </div>
      </div>
      <input
        ref={inputRef}
        className="hidden-input"
        type="text"
        onKeyDown={handleUserInput}
      />
    </div>
  );
};

export default TypingBox;
