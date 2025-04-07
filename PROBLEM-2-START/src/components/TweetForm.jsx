import React, { useState } from "react";

// The bellow code is given JUST AS EXAMPLE, to help you to build your HTML with the CSS style
export default function TweetForm({ onAddTweet }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAddTweet(input);
      setInput("");
    }
  };

  return (
    <form className="tweet-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What's happening?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" disabled={!input.trim()} className={input.trim() ? "disabled" : "enabled"}>
        Tweet
      </button>
    </form>
  );
}
