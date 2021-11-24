import { useState,useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory,useParams} from "react-router-dom";
import {  useFormik } from 'formik';
import { formValidationSchema } from "./AddMovie";
export function EditMovie() {
    const { id } = useParams();
    
   
    const[movie,setMovie]=useState(null);
useEffect(()=>{
  fetch(`https://616b1eb916e7120017fa1233.mockapi.io/movies/${id}`,{
method:"GET",
  })
  .then((data)=>data.json())
  .then((mv)=>setMovie(mv));
},[id]);

return movie ? <UpdateMovie movie={movie} /> : "";
 }

function UpdateMovie({movie}){
  const {handleSubmit,values,handleChange,handleBlur,errors,touched }=
  useFormik({
    initialValues:{name:movie.name,poster:movie.poster,ratings:movie.ratings,summary:movie.summary,trailer:movie.trailer},
   validationSchema:formValidationSchema,
    onSubmit:(updatedMovie)=>{
      console.log("onSubmit",updatedMovie);
      editMovie(updatedMovie);
    },
  });
  
  const history =useHistory();
  const editMovie = (updatedMovie) => {
    
console.log(updatedMovie);



  fetch(`https://616b1eb916e7120017fa1233.mockapi.io/movies/${movie.id}`,{
      method:"PUT",
      body:JSON.stringify(updatedMovie),
        headers: {'Content-Type': 'application/json'
      },
         }).then(()=>history.push("/movies"));
        };
  return (
     <form  onSubmit={handleSubmit}   className="add-movie-form">
     <TextField
     id="name"
      name="name"
     value={values.name}
     onChange={handleChange}
     onBlur={handleBlur}
        label="Name"
        error={ errors.name && touched.name} 
         helperText=  { errors.name && touched.name &&errors.name}
       variant="standard" />
      
        
    <TextField
        id="poster"
         name="poster"
        value={values.poster}
        onChange={handleChange}
        onBlur={handleBlur}
           label="Poster"
           error={ errors.poster && touched.poster} 
            helperText=  { errors.poster && touched.poster &&errors.poster}
          variant="standard" />
         
        <TextField 
        id="ratings"
        name="ratings"
        value={values.ratings}
        onChange={handleChange}
        onBlur={handleBlur}
         
          label="Ratings"
          error={ errors.ratings && touched.ratings} 
            helperText=  { errors.ratings && touched.ratings &&errors.ratings}
          variant="standard" />
        
        <TextField
        id="summary"
        name="summary"
        value={values.summary}
        onChange={handleChange}
        onBlur={handleBlur} 
          label="Summary"
          error={ errors.summary && touched.summary} 
            helperText=  { errors.summary && touched.summary &&errors.summary}
          variant="standard" />
      <TextField
       id="trailer"
          name="trailer"
          value={values.trailer}
          onChange={handleChange}
          onBlur={handleBlur}
           label="Trailer"
           error={ errors.trailer && touched.trailer} 
            helperText=  { errors.trailer && touched.trailer &&errors.trailer}
          variant="standard" />
 
      <Button type="submit" color="success" variant="outlined">
        Save
      </Button>
  </form>
    );
  }
