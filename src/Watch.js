import React from "react";

const Watch = ({ seconds }) => {
  const timer = new Date(0, 0, 0, 0, 0, seconds);
  const clock = [...timer.toLocaleTimeString("pt-BR")];
  const pointers = clock.filter((pointer) => {
    if (pointer !== ":") return true;
    else return false;
  });
  return (
    <section className="cronometer__watcher">
      <div className="pointers">
        {pointers.map((item, index) => {
          return (
            <div className="pointers__pointer" key={index}>
              {item}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Watch;
