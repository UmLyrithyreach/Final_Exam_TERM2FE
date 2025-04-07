import React, { useState } from "react";

const colors = [
  "#5DADE2",
  "#E67E22",
  "#F5B041",
  "#8E44AD",
  "#2ECC71",
];

// Your code for the ColorCard

export default function ColorCard({ colorSetter, title }) {
  const [currentColorIndex, setCurrentColorIndex] = useState(
    colors.indexOf(colorSetter)
  );

  function handleClickEvent() {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  }

  return (
    <div
      className="card"
      style={{ backgroundColor: colors[currentColorIndex] }}
      onClick={handleClickEvent}
    >
      <h3>{title}</h3>
      <p>{colors[currentColorIndex]}</p>
    </div>
  );
}