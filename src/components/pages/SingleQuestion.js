import { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import "../../style/rushAnswers.css";

export default function SingleQuestion({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <div className="body">
        <div className="flex items-center justify-between border-0 p-4 my-3 rounded-md border-red-800"
        onClick={() => setShowAnswer(!showAnswer)}>
          <h2 className="text-lg font-semibold tracking-wider cursor-pointer">
            {question}
          </h2>
          {showAnswer ? (
            <button onClick={() => setShowAnswer(!showAnswer)}>
              <BsDash className="text-xl"/>
            </button>
          ) : (
            <button onClick={() => setShowAnswer(!showAnswer)}>
              <BsPlus className="text-xl" />
            </button>
          )}
        </div>
        <div className="px-5">{showAnswer && 
          <div>
          <div className="grow border-2 border-red-800" id="subline"></div>
          <p id="rushanswers" >{answer}</p>
          </div>}
        </div>
      </div>
    </>
  );
}
