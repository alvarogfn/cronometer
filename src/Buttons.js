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
    <div className="cronometer__controllers">
      <ul className="controllers">
        <li className="controllers__list">
          <button
            className="controllers__button"
            onClick={() => {
              changeTimerState();
            }}
          >
            {!timer ? "▶" : "||"}
          </button>
        </li>
        <li className="controllers__list">
          <button
            className="controllers__button"
            onClick={() => resetTimer()}
            disabled={seconds < 1}
          >
            ■
          </button>
        </li>
        <li className="controllers__list">
          <button className="controllers__button" onClick={() => appendSave()}>
            📥
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Buttons;
