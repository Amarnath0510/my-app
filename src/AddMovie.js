import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddMovie({ movies, setMovies }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [ratings, setRatings] = useState("");
  const [summary, setSummary] = useState("");
  const addMovie = () => {
    const newMovie = {
      name,
      poster,
      ratings,
      summary,
    };
    console.log(newMovie);
    setMovies([...movies, newMovie]);


  };
  return <div className="add-movie-form">
    <TextField
      value={name}
      onChange={(event) => setName(event.target.value)}
      label="Name"
      variant="standard" />
    <TextField
      value={poster}
      onChange={(event) => setPoster(event.target.value)}
      label="Poster"
      variant="standard" />
    <TextField
      value={ratings}
      onChange={(event) => setRatings(event.target.value)}
      label="Ratings"
      variant="standard" />
    <TextField
      value={summary}
      onChange={(event) => setSummary(event.target.value)}
      label="Summary"
      variant="standard" />
    <Button onClick={addMovie} variant="outlined">
      Add movie
    </Button>
  </div>;
}
