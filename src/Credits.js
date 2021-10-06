import React from "react";

const Credits = () => {
  return (
    <ul className="footer">
      <li className="footer__item">
        <a
          className="footer__link"
          href="https://github.com/alvarogfn/"
          target="_blank"
          rel="noreferrer"
        >
          Developed by alvarogfn
        </a>
      </li>
      <li className="footer__item">
        <a
          className="footer__link"
          href="https://pages.github.com/"
          target="_blank"
          rel="noreferrer"
        >
          Hosted by GitHub Pages
        </a>
      </li>
      <li className="footer__item">
        <a
          className="footer__link"
          href="https://pt-br.reactjs.org/"
          target="_blank"
          rel="noreferrer"
        >
          Powered by React
        </a>
      </li>
    </ul>
  );
};

export default Credits;
