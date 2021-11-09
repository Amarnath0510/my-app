import { useState } from 'react';
import { Counter } from "./counter.js";





export function Movie({ name, ratings, summary, poster }) {
  const [show, setShow] = useState(true);
  const styles = { color: ratings < 8.5 ? "crimson" : "green", fontWieght: "bold" };
  const summaryStyles = { display: show ? "block" : "none" };
  return (
    <div className="movie-container">
      <img src={poster}
        alt={name}
        className="movie-poster" />
      <div className="details">
        <h2 className="movie-name">{name}</h2>
        <h3 className="movie-ratings" style={styles}>⭐{ratings}</h3>
      </div>
      <button onClick={() => setShow(!show)} className="movie-show-button">{show ? "Hide" : "Show"} description</button>
      <p style={summaryStyles} className="movie-summary">{summary}</p>
      <Counter />
    </div>
  );
}
