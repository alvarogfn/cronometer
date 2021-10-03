import React from "react";

const Watch = ({ seconds }) => {
  const timer = new Date(0, 0, 0, 0, 0, seconds);
  return (
    <section className="cronometer__watcher">
      <div>{timer.toLocaleTimeString("pt-BR")}</div>
    </section>
  );
};

export default Watch;
