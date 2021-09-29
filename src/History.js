import React from "react";

const History = ({ history }) => {
  if (!history.length) {
    return null;
  }

  return (
    <section>
      <ul>
        {history.map((item, index) => {
          return (
            <li key={index}>
              <div>{item[1].date}</div>
              <div>{item[1].time}</div>
              <div>{item[0]}</div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default History;
