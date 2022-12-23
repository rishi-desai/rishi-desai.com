import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "The Name's Rishi Desai",
      "Guy-who-loves-soccer",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
}

export default Hero;
