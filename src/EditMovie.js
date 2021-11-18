import { useState,useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory,useParams} from "react-router-dom";
export function EditMovie() {
    const { id } = useParams();
    
    
    const[movie,setMovie]=useState(null);
useEffect(()=>{
  fetch(`https://616b1eb916e7120017fa1233.mockapi.io/movies/${id}`,{
method:"GET",
  })
  .then((data)=>data.json())
  .then((mv)=>setMovie(mv));
},[]);

return movie ? <UpdateMovie movie={movie} /> : "";
 }

function UpdateMovie({movie}){
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [ratings, setRatings] = useState(movie.ratings);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer,setTrailer]= useState(movie.trailer);
  const history =useHistory();
  const editMovie = () => {
    const updatedMovie = {
      name,
      poster,
      ratings,
      summary,
      trailer,
    }; 
console.log(updatedMovie);



  fetch(`https://616b1eb916e7120017fa1233.mockapi.io/movies/${movie.id}`,{
      method:"PUT",
      body:JSON.stringify(updatedMovie),
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
     <TextField       value={poster}
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
