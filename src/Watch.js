import React from "react";

const Watch = ({ seconds }) => {
  const timer = new Date(0, 0, 0, 0, 0, seconds);
  const watcher = [...timer.toLocaleTimeString("pt-BR")];
  const pointers = watcher.filter((pointer) => {
    if (pointer !== ":") return true;
    else return false;
  });
  return (
    <section className="cronometer__watcher">
      <ul className="pointers">
        {pointers.map((item, index) => {
          return (
            <li className="pointers__pointer" key={index}>
              <div className="pointers__number">{item}</div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Watch;
