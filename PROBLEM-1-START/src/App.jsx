import React from "react";
import ColorCard from "./components/ColorCard";

// Your code for the App


// The bellow code is given JUST AS EXAMPLE, to help you to build your HTML with the CSS style

export default function App() {
  return (
    <div className="app">
      <h1>Colors chooser</h1>
      <div className="card-container">
        <ColorCard initialColor="#5DADE2" title="The Title" />
        <ColorCard initialColor="#E67E22" title="Another Title" />
        <ColorCard initialColor="#2ECC71" title="Another Title x2" />
      </div>
    </div>
  );
}