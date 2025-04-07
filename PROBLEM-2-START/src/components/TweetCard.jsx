import React from "react";

// The bellow code is given JUST AS EXAMPLE, to help you to build your HTML with the CSS style
export default function TweetCard({ id, name, read, onToggleRead }) {
  return (
    <div className="tweet" onClick={() => onToggleRead(id)}>
      <h4>{name}</h4>
      <small className={read ? "read" : "not-read"}>
        {read ? "Read" : "Not Read"}
      </small>
    </div>
  );
}
