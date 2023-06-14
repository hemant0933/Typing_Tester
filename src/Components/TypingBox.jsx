import React, { createRef, useMemo, useEffect, useRef, useState } from "react";
import { generate } from "random-words";

import UpperMenu from "./UpperMenu";
import { useTestMode } from "../Context/TestModeContext";
import Stats from "./Stats";
import { v4 as uuidv4 } from 'uuid';

// var randomWords = require('random-words');
const TypingBox = () => {
  const inputRef = useRef(null);
  // const {testTimer} = useTestMode();
  const { testTime } = useTestMode();
  const [countDown, setCountDown] = useState(15);
  const [testStart, setTestStart] = useState(false);
  const [testEnd, setTestEnd] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [graphData,setGraphData] = useState([]);
  const [currWordIndex, setcurrWordIndex] = useState(0);
  const [currCharIndex, setcurrCharIndex] = useState(0);
  const [correctChars, setCorrectChars] = useState(0);
  const [incorrectChars, setInCorrectChars] = useState(0);
  const [missedChars, setMissedChars] = useState(0);
  const [correctWord,setCorrectWord] = useState(0);
  const [wordsArray, setWordsArray] = useState(() => {
    return generate(50);
  });

  const wordsSpanRef = useMemo(() => {
    return Array(wordsArray.length)
      .fill(0)
      .map(i => createRef(null))
  }, [wordsArray]);

  //useRef is a hook and can only be used in func. based comp.
  //createRef is function and can only be used in callback function.

  const startTimer = () => {
    const intervalId = setInterval(timer, 1000);
    setIntervalId(intervalId);
    function timer() {
      setCountDown((latestCountDown) => {

        setCorrectChars((correctChars)=>{
          
          setGraphData((graphData)=>{
           
            return [...graphData, [
            testTime - latestCountDown + 1,
            (correctChars/5)/((testTime - latestCountDown + 1)/60)
            ]]

          })

          return correctChars;
        })
        if (latestCountDown === 1) {
          setTestEnd(true);
          clearInterval(intervalId);
          return 0;
        }

        return latestCountDown - 1;
      });
    }
  };
  const resetTest = () => {
    clearInterval(intervalId);
    setCountDown(testTime);
    setTestStart(false);
    setTestEnd(false);
    setcurrCharIndex(0);
    setcurrWordIndex(0);
    setWordsArray(generate(50));
    focusInput();
    resetWordSpanRedClassname();
  };

  const resetWordSpanRedClassname = () => {
    wordsSpanRef.map(i => {
      Array.from(i.current.childNodes).map(j=>{
        j.className = '';
      })
    });

    wordsSpanRef[0].current.childNodes[0].className = "current";
  };

  const handleUserInput = (e) => {
    // the timer func. will start when user has has start typing
    if (!testStart) {
      startTimer();
      setTestStart(true);
    }
    const allCurrChars = wordsSpanRef[currWordIndex].current.childNodes;

    if (e.keyCode === 32) {

      let correctCharInWord = wordsSpanRef[currWordIndex].current.querySelectorAll('.correct');

      if(correctCharInWord.length === allCurrChars.length){
        setCorrectWord(correctWord + 1);
      }


      if (allCurrChars.length <= currCharIndex) {
        //remove cursor from last place in a word
        allCurrChars[currCharIndex - 1].classList.remove("current_right");

      } else {
        //remove cursor from in between of the word
        setMissedChars(missedChars + (allCurrChars.length - currCharIndex));

        allCurrChars[currCharIndex].classList.remove("current");
      }
      // Logic for SpaceBar
      wordsSpanRef[currWordIndex + 1].current.childNodes[0].className =
        "current_right";
      setcurrWordIndex(currWordIndex + 1);
      setcurrCharIndex(0);
      return;
    }

    if (e.key === allCurrChars[currCharIndex].innerText) {
      // console.log("correctInput")
      allCurrChars[currCharIndex].className = "correct";
      setCorrectChars(correctChars+1);
    } 
    else {
      allCurrChars[currCharIndex].className = "incorrect";
      allCurrChars[currCharIndex].classList.add("current"); // Add blink class to wrong character
      setInCorrectChars(incorrectChars+1);
      return;
    }

    if (currCharIndex + 1 === allCurrChars.length) {
      allCurrChars[currCharIndex].className += " current_right";
    } else {
      allCurrChars[currCharIndex + 1].className = "current"; // for moving cursor
    }

    setcurrCharIndex(currCharIndex + 1);
  };

  const calculateWPM = () => {
    return Math.round((correctChars/5)/(testTime/60));
  }
  const calculateAcc = () => {
    return Math.round((correctWord/currWordIndex)*100);
  }

  const focusInput = () => {
    inputRef.current.focus();
  };
  //here when ever our page gets render the input become in focus mode
  //means when the cursor start blinking
  
  useEffect(() => {
    focusInput();
    wordsSpanRef[0].current.childNodes[0].className = "current";
  }, []);

  useEffect(() => {
    resetTest();
  }, [testTime]);

  return (
    <div className="textWrapper">
      <UpperMenu countDown={countDown} />
      {testEnd ? (
       <Stats 
       wpm={calculateWPM()} 
       accuracy={calculateAcc()}
       correctChars={correctChars}
       incorrectChars={incorrectChars}
       missedChars={missedChars}
       graphData={graphData}  />
      ) : (
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
      )}
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
