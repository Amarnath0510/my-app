import './App.css';
import { MovieList } from './MovieList';
import{useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
export default function App() {
  console.log("Hi");
  const INITIAL_MOVIES=[
    {
      name:"Godfather",
      poster:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      ratings:"9.2",
      summary:"The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son",
    },
    {
    name:"The pursuit of Happyness",
    poster:"https://miro.medium.com/max/548/1*Y8vXN1mJeEHyXWJtFICjiQ.jpeg",
    ratings:"8.7",
    summary:"Tired of Chris's professional failures, his wife decides to separate, leaving him financially broke with an unpaid internship in a brokerage firm and his son's custody to deal with.",
    },
    {
      name:"Avengers",
      poster:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      ratings:"8",
      summary:"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    },
    {
      name:"Wolf of the wall street",
      poster:"https://flxt.tmsimg.com/assets/p9991602_p_v13_ah.jpg",
      ratings:"8.2",
      summary:"Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government."
    },
    {
      name:"Nayagan",
      poster:"https://images-na.ssl-images-amazon.com/images/I/91DAQ9OTVOL._RI_.jpg",
      ratings:"8.7",
      summary:"Velu Nayakan, who witnesses the brutal murder of his father, kills a corrupt policeman and escapes to Mumbai, only to become a gangster.",
    },
    {
      name:"Thalapathy",
      poster:"https://images-na.ssl-images-amazon.com/images/I/616tUbWJV1L._RI_.jpg",
      ratings:"8.5",
      summary:"An orphan named Surya raised in a slum befriends a good crime boss named Devaraj and works for him. Their existence is threatened when a new honest district collector arrives.",
    },
    {
      name:"Jai Bheem",
      poster:"https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      ratings:"9.8",
      summary:"A pregnant woman from a primitive tribal community, searches desperately for her husband, who is missing from police custody. A High Court advocate rises in support to find her husband and seek justice for them.",
    },
    {
      name:"kaththi",
      poster:"http://3.bp.blogspot.com/-pQJ25BfkxZc/VEcspZxO__I/AAAAAAAAEm0/pdqBdjZetAs/s1600/Vijay-samantha-Kaththi-movie-stills-24.jpg",
      ratings:"8.1",
      summary:"Kathiresan, who escapes from prison, accidentally meets his lookalike, Jeeva, who gets shot by criminals. Kathiresan masquerades as Jeeva in order to save himself, but it turns him into a crusader.",
    }
  ];
  const [name,setName]=useState("");
  const [poster,setPoster]=useState("");
  const [ratings,setRatings]=useState("");
  const [summary,setSummary]=useState("");
const[movies,setMovies]=useState(INITIAL_MOVIES);
const addMovie=()=>{
 const newMovie={
    name,
    poster,
    ratings,
    summary,
  };
  console.log(newMovie);
  setMovies([...movies,newMovie]);


};
  return ( 
     <div className="App">
     <div>

     <input
     value={name}
  onChange={(event)=>setName(event.target.value)}
      placeholder="Enter a movie name "/>
     <input 
     value={poster}
  onChange={(event)=>setPoster(event.target.value)}
     placeholder="Enter a movie poster "/>
     <input
     value={ratings}
  onChange={(event)=>setRatings(event.target.value)}
      placeholder="Enter a movie ratings "/>
     <input 
     value={summary}
  onChange={(event)=>setSummary(event.target.value)}
      placeholder="Enter a movie summary "/>
     < button onClick={addMovie}>Add movie</button>
     </div>
     <MovieList movies={movies}/>
      <AddColor/>
     <ColorBox />
   </div> 
  );
}

function AddColor(){
  const [color,setColor]=useState("orange");
  const styles={backgroundColor:color};
  // const colors=["teal","orange","blue"];
  const[colors,setColors]=useState(["teal","orange","blue"]);
  return (
    <div>
    <div className="add-color-form">
  <TextField
  value={color}
  onChange={(event)=>setColor(event.target.value)}
  style={styles}
  label="Enter a color" 
  variant="standard"
   />
  <Button onClick={()=>setColors([...colors,color])} variant="outlined">
  Add color
  </Button>
 </div>
  
 { colors.map((clr,index) => ( 
   <ColorBox key={index}color={clr}/>
  ))}
  
  <ColorBox/>
 </div>

  )}
function ColorBox({color}){
  const styles={backgroundColor:color,height:"25px",width:"200px",marginTop:"10px"}
  return <div style={styles}>
  </div>
}



