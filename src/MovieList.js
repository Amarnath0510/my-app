import { IconButton } from "@mui/material";
import { Movie } from "./Movie";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useHistory} from "react-router-dom";
export function MovieList({ movies,setMovies }) {
  const history=useHistory();
  return (
    <section className="movie-list">
      {movies.map(({ name, ratings, summary, poster,id },index) => (
        <Movie
          name={name}
          ratings={ratings}
          summary={summary}
          poster={poster}
           id={id}
          deleteButton={
            <IconButton 
          onClick={()=>{
            // fetch(
            //   "https:616b1eb916e7120017fa1233.mockapi.io/movies/"+id,
            //   {method:"DELETE"})
          // console.log("Deleting...",index);
          // const deleteIdx=index;
          // const remainingMovies=movies.filter(
          //   (mv,idx)=>idx !== deleteIdx
          // );
          // console.log("Remaining",remainingMovies);
          // setMovies(remainingMovies);  
          }}
        className="movie-show-button"
           color="error"
            aria-label="delete movie"
            >
          <DeleteIcon />
            </IconButton>
          }
          editButton={
          <IconButton 
          
          onClick={()=> history.push("/movies/edit/" + index)}

   
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