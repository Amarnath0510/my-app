import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function EditMovie({ movies, setMovies }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [ratings, setRatings] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer,setTrailer]= useState("");
  const addMovie = () => {
    const newMovie = {
      name,
      poster,
      ratings,
      summary,
      trailer,
    };
    console.log(newMovie);
    setMovies([...movies, newMovie]);


  };
  return (
  <div className="add-movie-form">
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
      <TextField
      value={trailer}
      onChange={(event) => setTrailer(event.target.value)}
      label="Trailer"
      variant="standard" />

    <Button onClick={addMovie} variant="outlined">
      Save 
    </Button>
  </div>
  );
}