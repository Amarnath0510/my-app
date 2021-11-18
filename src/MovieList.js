import { IconButton } from "@mui/material";
import { Movie } from "./Movie";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useHistory} from "react-router-dom";
import{useEffect, useState} from "react";
export function MovieList() {
  const[movies,setMovies]=useState([]);
const getMovies= ()=>{
  fetch("https://616b1eb916e7120017fa1233.mockapi.io/movies")
  .then((data)=>data.json())
  .then((mvs)=>setMovies(mvs));
};
useEffect(getMovies,[]);


const deleteMovie=(id) =>{
   fetch(`https://616b1eb916e7120017fa1233.mockapi.io/movies/${id}`,{
    method:"DELETE",
              })
              .then(()=>getMovies());   
              };

  const history=useHistory();
  return (
    <section className="movie-list">
      {movies.map(({ name, ratings, summary, poster,id }) => (
        <Movie
        key={id}
          name={name}
          ratings={ratings}
          summary={summary}
          poster={poster}
           id={id}
          deleteButton={
            <IconButton 
          onClick={() => deleteMovie (id)}  
        className="movie-show-button"
           color="error"
            aria-label="delete movie"
            >
          <DeleteIcon />
            </IconButton>
          }
          editButton={
          <IconButton 
          
          onClick={()=> history.push("/movies/edit/" + id)}

   
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