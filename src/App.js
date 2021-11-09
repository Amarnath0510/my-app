import './App.css';
import{useState} from 'react';
export default function App() {
  console.log("Hi");
  const movies=[
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

  return ( 
     <div className="App">
    <MovieList movies={movies}/>
  
    </div>

   
  );
}

function Counter(){
  const [like,setLike]=useState(0);
  const [dislike,setDislike]=useState(0);
  return(
    <div className="counter-container">
<button className="likes-dislikes" onClick={()=>{setLike(like+1);}}>👍 {like}</button>
<button className="likes-dislikes" onClick={()=>{setDislike(dislike+1);}}>👎{dislike}</button>
</div>
  );
}


function MovieList({movies}){
  return(
  <section className="movie-list">
     {movies.map(({name,ratings,summary,poster})=>(
    <Movie
     name={name}
    ratings={ratings} 
    summary={summary}
    poster={poster}
    />
     ))}
    
   </section>
  )}
  
  function Movie({name,ratings,summary,poster}){
    const[show,setShow]=useState(true);
    const styles={color:ratings < 8.5?"crimson":"green",fontWieght:"bold"};
    const summaryStyles={display:show ?"block":"none"};
    return (
      <div className="movie-container">
    <img src={poster} 
    alt={name} 
    className="movie-poster"/>
    <div className="details">
    <h2 className="movie-name">{name}</h2>
    <h3 className="movie-ratings" style={styles}>⭐{ratings}</h3>
    </div>
    <button onClick={()=>setShow(!show)} className="movie-show-button">{show?"Hide":"Show"} description</button>
    <p style={summaryStyles}className="movie-summary">{summary}</p>
    <Counter/>
    </div>
    );
  }
 