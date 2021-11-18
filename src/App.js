import './App.css';
import { MovieList } from './MovieList';
import{useEffect, useState} from "react";
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import {useHistory} from "react-router-dom";
import Paper from '@mui/material/Paper';
 import { Switch, Route, Redirect} from "react-router-dom";
import { MovieDetails } from './MovieDetails';
import { NotFound } from './NotFound';
import { Welcome } from './Welcome';
import { AddMovie } from './AddMovie';
import { AddColor } from './AddColor';
import { EditMovie } from './EditMovie';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'


export default function App() {
  console.log("Hi");
  // const INITIAL_MOVIES=[
  //    {name:"Godfather",
  //     poster:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  //     ratings:"9.2",
  //     summary:"The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son",
  //     trailer:"https://www.youtube.com/embed/kTlhEX0kmL8",
  //   },
  //   {
  //   name:"The pursuit of Happyness",
  //   poster:"https://miro.medium.com/max/548/1*Y8vXN1mJeEHyXWJtFICjiQ.jpeg",
  //   ratings:"8.7",
  //   summary:"Tired of Chris's professional failures, his wife decides to separate, leaving him financially broke with an unpaid internship in a brokerage firm and his son's custody to deal with.",
  //   trailer:"https://www.youtube.com/embed/89Kq8SDyvfg" 
  //   },
  //   {
  //     name:"Avengers",
  //     poster:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
  //     ratings:"8",
  //     summary:"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
  //     trailer:"https://www.youtube.com/embed/TcMBFSGVi1c"
  //   },
  //   {
  //     name:"Wolf of the wall street",
  //     poster:"https://flxt.tmsimg.com/assets/p9991602_p_v13_ah.jpg",
  //     ratings:"8.2",
  //     summary:"Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
  //     trailer:"https://www.youtube.com/embed/iszwuX1AK6A"
  //   },
  //   {
  //     name:"Nayagan",
  //     poster:"https://images-na.ssl-images-amazon.com/images/I/91DAQ9OTVOL._RI_.jpg",
  //     ratings:"8.7",
  //     summary:"Velu Nayakan, who witnesses the brutal murder of his father, kills a corrupt policeman and escapes to Mumbai, only to become a gangster.",
  //     trailer:"https://www.youtube.com/embed/1S6YkmYvgi8",
  //   },
  //   {
  //     name:"Thalapathy",
  //     poster:"https://images-na.ssl-images-amazon.com/images/I/616tUbWJV1L._RI_.jpg",
  //     ratings:"8.5",
  //     summary:"An orphan named Surya raised in a slum befriends a good crime boss named Devaraj and works for him. Their existence is threatened when a new honest district collector arrives.",
  //     trailer:"https://www.youtube.com/embed/-MEJKs5m-cU",
  //   },
  //   {
  //     name:"Jai Bheem",
  //     poster:"https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
  //     ratings:"9.8",
  //     summary:"A pregnant woman from a primitive tribal community, searches desperately for her husband, who is missing from police custody. A High Court advocate rises in support to find her husband and seek justice for them.",
  //     trailer:"https://www.youtube.com/embed/Gc6dEDnL8JA",
  //   },
  //   {
  //     name:"kaththi",
  //     poster:"http://3.bp.blogspot.com/-pQJ25BfkxZc/VEcspZxO__I/AAAAAAAAEm0/pdqBdjZetAs/s1600/Vijay-samantha-Kaththi-movie-stills-24.jpg",
  //     ratings:"8.1",
  //     summary:"Kathiresan, who escapes from prison, accidentally meets his lookalike, Jeeva, who gets shot by criminals. Kathiresan masquerades as Jeeva in order to save himself, but it turns him into a crusader.",
  //     trailer:"https://www.youtube.com/embed/bMf0IyzyKt4"
  //   },
  // ];
  const history=useHistory();
const[mode,setMode]=useState("dark");
const theme = createTheme({
  palette: {
    mode: mode,
  },
});

  return (
    <ThemeProvider theme={theme}>
    
    <Paper elevation={2} style={{borderRadius:"0px",minHeight:"100vh"}} >
    <div className="App">
    <AppBar  position="static" style={{marginBottom:"24px" }}>
  <Toolbar variant="dense">
  <Button variant="text" color="inherit" onClick={()=> history.push("/")}>Home</Button>
  <Button variant="text" color="inherit" onClick={()=> history.push("/movies")} >Movies</Button>
  <Button variant="text" color="inherit"  onClick={()=> history.push("/add-movies")}  >Add Movies</Button>
  <Button variant="text" color="inherit"  onClick={()=> history.push("/color-game")} >Color game</Button>
  <Button variant="text" color="inherit"  onClick={()=> history.push("/tic-tac-toe")} >Tic-Tac-Toe game</Button>
  <Button 
  startIcon=  {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
  style={{marginLeft:"auto"}}
  variant="text" color="inherit"  onClick={()=> setMode(mode==="light" ? "dark" :"light")}>
  {mode==="light" ? "Dark": "Light"} mode</Button>
  </Toolbar>
</AppBar>
   
    <Switch>
    <Route  exact path="/">
    <Welcome/>
     </Route>
     <Route path="/films">
     <Redirect to="/movies"/>
     </Route>
    <Route path="/movies/edit/:id"><EditMovie /></Route>
    <Route path="/movies/:id">
    <MovieDetails />
    </Route>
    <Route path="/movies">
     <MovieList />
    </Route>
    <Route path="/add-movies">
    <AddMovie />
    </Route>
    <Route path="/color-game">
    <AddColor/>
    </Route>
    <Route path="/tic-tac-toe">
    <TicTacToe/>
    </Route>
    <Route path="**">
    <NotFound/>
      </Route>
    </Switch>
   </div>  
   </Paper >
 </ThemeProvider>
  );
}


function TicTacToe(){
  const { width, height } = useWindowSize()
  const[board,setBoard]=
   useState([
    null,
  null,
    null,
   null,
    null,
    null,
    null,
    null,
   null,
   ]);
useState([0,1,2,3,4,5,6,7,8]);

  const[isXTurn,setISXTurn]=useState(true);
//   const winner=decideWinner(board);
// const handleClick = (index) =>{
  
// if (!board[index]){
//   const boardCopy=[...board];
//   boardCopy[index]=isXTurn ? "X" : "O" ;
//   setBoard(boardCopy);
// setISXTurn(!isXTurn);
// }
// };

const decideWinner=(board) => {
  const lines=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],
  ];
for (let i=0;i<lines.length;i++){
  const[a,b,c]=lines[i];
  if(board[a]!==null && board[a]===board[b] && board[b]===board[c]){
    console.log("Winner is",board[a]); 
    return board[a]; 
  }
}
return null;
};
 const winner=decideWinner(board);
 const handleClick = (index) =>{
  
 if (winner===null && !board[index]){
   const boardCopy=[...board];
   boardCopy[index]=isXTurn ? "X" : "O" ;
   setBoard(boardCopy);
 setISXTurn(!isXTurn);
 }
 };

 return (
   <div className="full-game">
   <Confetti
   width={width}
   height={height}
   gravity={0.05}
 />

    <div className="board">
    {board.map((val,index)=>(
     <GameBox  val={val} onPlayerClick={()=> handleClick(index)}/>
    ))}
     </div>
     {winner ?<h2>Winner is:{winner}</h2>: ""}
     </div>
  );
}
  
function GameBox({onPlayerClick,val}){
 
  const styles={color: val=== "X" ? "green":"red"};
  return(
  
    <div
    style={styles}
     onClick={onPlayerClick}
      className="game-box"
     >
  {val}
  </div>
  );
}

