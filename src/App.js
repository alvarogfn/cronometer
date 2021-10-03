import React from "react";
import Watch from "./Watch.js";
import Buttons from "./Buttons.js";
import History from "./History.js";
import Credits from "./Credits.js";
import "./scss/style.scss";

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
      <section className="cronometer">
        <Watch seconds={seconds} />
        <Buttons
          timer={timer}
          setTimer={setTimer}
          seconds={seconds}
          setSeconds={setSeconds}
          appendSave={appendSave}
        />
      </section>
      <aside>
        <History history={history} />
      </aside>
      <footer>
        <Credits />
      </footer>
    </main>
  );
};

export default App;
// {
//   // this.state.timer.;
// }
