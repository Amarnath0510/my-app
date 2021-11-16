import { IconButton } from "@mui/material";
import { Movie } from "./Movie";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useHistory} from "react-router-dom";
export function MovieList({ movies,setMovies }) {
  const history=useHistory();
  return (
    <section className="movie-list">
      {movies.map(({ name, ratings, summary, poster },index) => (
        <Movie
          name={name}
          ratings={ratings}
          summary={summary}
          poster={poster}
           
          id={index}
          deleteButton={
            <IconButton 
          onClick={()=>{
          console.log("Deleting...",index);
          const deleteIdx=index;
          const remainingMovies=movies.filter(
            (mv,idx)=>idx !== deleteIdx
          );
          console.log("Remaining",remainingMovies);
          setMovies(remainingMovies);  
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
          // stytle={{marginRight:"auto"}}
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
