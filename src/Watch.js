import React from "react";

const Watch = ({ seconds }) => {
  const timer = new Date(0, 0, 0, 0, 0, seconds);
  return (
    <article>
      <div>{timer.toLocaleTimeString("pt-BR")}</div>
    </article>
  );
};

export default Watch;
