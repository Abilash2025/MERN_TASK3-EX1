import React, { useState } from "react";

function WordCounter() {
  const [text, setText] = useState("");
  const words = text.trim().split(/\s+/).filter(Boolean);

  const wordCount = words.length;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea
        placeholder="Enter your text here..."
        value={text}
        onChange={handleChange}
        rows="5"
        cols="40"
      ></textarea>
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default WordCounter;
