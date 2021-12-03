import { IconButton } from "@mui/material";
import { Movie } from "./Movie";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useHistory} from "react-router-dom";
import{useEffect, useState} from "react";
//  const API_URL="https://616b1eb916e7120017fa1233.mockapi.io";
 const API_URL="https://movie-app05.herokuapp.com";
export function MovieList() {
  const[movies,setMovies]=useState([]);
const getMovies= ()=>{
  fetch(`${API_URL}/movies`)
  .then((data)=>data.json())
  .then((mvs)=>setMovies(mvs));
};
useEffect(getMovies,[]);


const deleteMovie=(id) =>{
   fetch(`${API_URL}/movies/${id}`,{
    method:"DELETE",
              })
              .then(()=>getMovies());   
              };

  const history=useHistory();
  return (
    <section className="movie-list">
      {movies.map(({ name, ratings: rating, summary, poster,id,_id }) => (
        <Movie
        key={_id}
          name={name}
          rating={rating}
          summary={summary}
          poster={poster}
           id={_id}
          deleteButton={
            <IconButton 
          onClick={() => deleteMovie(_id)}  
        className="movie-show-button"
           color="error"
            aria-label="delete movie"
            >
          <DeleteIcon />
            </IconButton>
          }
          editButton={
          <IconButton 
          
          onClick={()=> history.push("/movies/edit/" + _id)}

   
        className="movie-show-button"
           color="secondary"
            aria-label="edit movie"
            >
          <EditIcon />
            </IconButton>
      }
          />
      ))}

    </section>
  );
}

// fetch(
//   "https:616b1eb916e7120017fa1233.mockapi.io/movies"+id,
//   {method:"DELETE"})
// .then((data)=>data.json())
// .then((mvs)=>setMovies(mvs));