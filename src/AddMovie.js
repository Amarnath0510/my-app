import { useState,useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
 import { useHistory } from "react-router-dom";
export function AddMovie() {
  // const { id } = useParams();
    const history=useHistory();
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [ratings, setRatings] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer,setTrailer]= useState("");
useEffect(()=>{
  console.log("movie form is Updated",{
  name,
  poster,
  ratings,
  summary,
  trailer,
  });
 },[name,poster]);

  const addMovie = () => {
    const newMovie = {
      name,
      poster,
      ratings,
      summary,
      trailer,
    };
    console.log(newMovie);
   
    
    
    // history.push("/movies");
    fetch(`https://616b1eb916e7120017fa1233.mockapi.io/movies`,{
      method:"POST",
      body:JSON.stringify(newMovie),
        headers: {'Content-Type': 'application/json'
      },
         }).then(()=>history.push("/movies"));
              

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
      Add movie
    </Button>
 </div>
  )
}
