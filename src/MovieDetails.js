
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {useHistory,useParams} from "react-router-dom";
import { useEffect,useState} from "react";
export function MovieDetails() {
  
  const history = useHistory();
  const {id} = useParams();
console.log(id);

// const movie = movies[id];
const[movie,setMovie]=useState({});
useEffect(()=>{
  fetch(`https://616b1eb916e7120017fa1233.mockapi.io/movies/${id}`,{
method:"GET",
  })
  .then((data)=>data.json())
  .then((mv)=>setMovie(mv));
},[]);

  console.log(movie);
  const styles = { color: "ratings" < 8.5 ? "crimson" : "green", fontWieght: "bold" };
  return (
    <div className="movie-detail-container">
      <iframe
        width="100%"
        height="800"
        src = {movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; 
        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>

      <div className="details">
        <h2 className="movie-name"> {movie.name} </h2>
       <h3 className="movie-ratings" style={styles}>⭐{movie.ratings}</h3>
      </div>
      <p className="movie-summary">{movie.summary}</p>
      <Button  onClick ={()=>history.goBack()}variant="outlined" startIcon={<KeyboardBackspaceIcon/>}>
  Back
</Button>
    </div>
  );
}
