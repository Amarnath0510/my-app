import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory,useParams } from "react-router-dom";
export function EditMovie({ movies, setMovies }) {
    const { id } = useParams();
    const history=useHistory();
    const movie=movies[id];
    console.log(id,movie);
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [ratings, setRatings] = useState(movie.ratings);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer,setTrailer]= useState(movie.trailer);
  const editMovie = () => {
    const updatedMovie = {
      name,
      poster,
      ratings,
      summary,
      trailer,
    };
    console.log(updatedMovie);
    // setMovies([...movies, updatedMovie]);
const copyMovieList=[...movies];
copyMovieList[id]=updatedMovie;
setMovies(copyMovieList);
history.push("/movies");

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

    <Button onClick={editMovie} variant="outlined">
      Save 
    </Button>
  </div>
  );
}