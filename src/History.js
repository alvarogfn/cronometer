import React from "react";

const History = ({ history, setHistory }) => {
  const [playState, setPlayState] = React.useState({
    animationPlayState: "running, paused",
  });

  if (!history.length) {
    return null;
  }

  const clearHistory = () => {
    setPlayState({ animationPlayState: "running, running" });
    setTimeout(() => {
      localStorage.removeItem("history");
      setHistory([]);
      setPlayState({ animationPlayState: "running, paused" });
    }, 1200);
  };
  return (
    <section className="history" style={playState}>
      <button
        onClick={() => {
          clearHistory();
        }}
        className="history__clean"
      >
        Clear
      </button>
      <ul className="history__list">
        {history.map((item, index) => {
          return (
            <li className="history__item" key={index}>
              <header className="history__datetime">
                <h1 className="history__date">{item[1].date}</h1>
                <h2 className="history__time">{item[1].time}</h2>
              </header>
              <section>
                <p className="history__elapsed">{item[0]}</p>
              </section>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default History;
