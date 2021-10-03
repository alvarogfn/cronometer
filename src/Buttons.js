import React from "react";

const Buttons = ({ timer, setTimer, seconds, setSeconds, appendSave }) => {
 
 
 const changeTimerState = () => {
    if (!timer) {
      setTimer(
        setInterval(() => {
          setSeconds((seconds) => seconds + 1);
        }, 1000)
      );
    } else {
      clearInterval(timer);
      setTimer(null);
    }
  };

  const resetTimer = () => {
    clearInterval(timer);
    setSeconds(0);
    setTimer(null);
  };

  return (
    <div>
      <ul>
        <li>
          <button
            onClick={() => {
              changeTimerState();
            }}
          >
            {!timer ? "Play" : "Pause"}
          </button>
        </li>
        <li>
          <button onClick={() => resetTimer()} disabled={seconds < 1}>
            Stop
          </button>
        </li>
        <li>
          <button onClick={() => appendSave()}>Save</button>
        </li>
      </ul>
    </div>
  );
};

export default Buttons;
