import React, { useState } from "react";
import TweetForm from "./components/TweetForm";
import TweetCard from "./components/TweetCard";

// This is an example of tweet objects

const INITIAL_TWEETS = [
  { id: 0, title: "React JS exam on going", read: false },
  { id: 1, title: "KNY Holidays tomorrow!", read: false },
  { id: 2, title: "Review your Web Dev course!", read: true },
];

// The bellow code is given JUST AS EXAMPLE, to help you to build your HTML with the CSS style
// Components are missing properties, states, callbacks... Update them accordingly.
export default function App() {
  const [tweets, setTweets] = useState(INITIAL_TWEETS);

  const addTweet = (title) => {
    const newTweet = { id: tweets.length, title, read: false };
    setTweets([...tweets, newTweet]);
  };

  const toggleRead = (id) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, read: !tweet.read } : tweet
      )
    );
  };

  return (
    <>
      <header>
        <h1>CADT Tweets</h1>
      </header>
      <TweetForm onAddTweet={addTweet} />
      <div className="tweet-list">
        {tweets.map((tweet) => (
          <TweetCard
            key={tweet.id}
            id={tweet.id}
            name={tweet.title}
            read={tweet.read}
            onToggleRead={toggleRead}
          />
        ))}
      </div>
    </>
  );
}
