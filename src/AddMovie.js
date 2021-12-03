
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
 import { useHistory } from "react-router-dom";
 import {  useFormik } from 'formik';
 import * as yup from 'yup';
 export const formValidationSchema =yup.object({
   name:yup.string().required("Why not fill this name?"),
   poster:yup.string().required("Why not fill this poster?").min(4,"Need a bigger poster"),
   ratings:yup.string().required("Why not fill this ratings?").min(0,"Need a bigger ratings").max(10,"Too much ratings "),
   summary:yup.string().required("Why not fill this summary?").min(10,"Need a bigger summary"),
   trailer:yup.string().required("Why not fill this trailer?").min(4,"Need a bigger trailer"),
 });
export function AddMovie() {
 
     const history=useHistory();
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [ratings, setRatings] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer,setTrailer]= useState("");
  const {handleSubmit,values,handleChange,handleBlur,errors,touched }=
  useFormik({
    initialValues:{name:"",poster:"",ratings:"",summary:"",trailer:""},
   validationSchema:formValidationSchema,
    onSubmit:(newMovie)=>{
      console.log("onSubmit",values);
      addMovie(newMovie);
    },
  });

  const addMovie = (newMovie) => {
    // const newMovie = {
    //   name,
    //    poster,
    //    ratings,
    //    summary,
    //    trailer,
  
     console.log(newMovie);
   
    
    
    //  history.push("/movies");
    const API_URL="https://movie-app05.herokuapp.com";
    fetch(`${API_URL}/movies`,{
  //  fetch(`https://616b1eb916e7120017fa1233.mockapi.io/movies`,{
        method:"POST",
        body:JSON.stringify(newMovie),
          headers: {'Content-Type': 'application/json'
       },
           }).then(()=>history.push("/movies"));
              

       };
  return (
  <form onSubmit={handleSubmit} className="add-movie-form">
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
    

    <Button type="submit"  variant="outlined">
      Add movie
    </Button>
 </form>
  );
  }