import React from "react";
import Watch from "./Watch.js";
import Buttons from "./Buttons.js";
import History from "./History.js";
import Credits from "./Credits.js";

const App = () => {
  const [seconds, setSeconds] = React.useState(0);
  const [timer, setTimer] = React.useState(null);
  const [history, setHistory] = React.useState(() => {
    const history = localStorage.getItem("history");
    if (history) {
      return JSON.parse(history);
    } else {
      return [];
    }
  });

  const appendSave = () => {
    let dateForSave = new Date(0, 0, 0, 0, 0, seconds);
    dateForSave = dateForSave.toLocaleTimeString("pt-BR");

    let today = new Date();

    let todayDate = today.toLocaleDateString("pt-BR");
    let todayTime = today.toLocaleTimeString("pt-BR");
    localStorage.setItem("history", JSON.stringify(history));
    setHistory([
      ...history,
      [dateForSave, { date: todayDate, time: todayTime }],
    ]);
  };

  return (
    <main>
      <Watch seconds={seconds} />
      <Buttons
        timer={timer}
        setTimer={setTimer}
        seconds={seconds}
        setSeconds={setSeconds}
        appendSave={appendSave}
      />
      <History history={history} />
      <Credits />
    </main>
  );
};

export default App;
// {
//   // this.state.timer.;
// }
