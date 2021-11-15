import { useState } from 'react';
import { Counter } from "./counter.js";
import IconButton from '@mui/material/IconButton';
// import Stack from '@mui/material/Stack';
// import DeleteIcon from '@mui/icons-material/Delete';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Icon } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import {useHistory} from "react-router-dom";





export function Movie({ name, ratings, summary, poster,id }) {
  const [show, setShow] = useState(true);
  const history=useHistory();
  const styles = { color: ratings < 8.5 ? "crimson" : "green", fontWieght: "bold" };
  const summaryStyles = { display: show ? "block" : "none" };
  return (
    <Card className="movie-container">
      <img src={poster}
        alt={name}
        className="movie-poster" />
        <CardContent>
      <div className="details">
        <h2 className="movie-name">{name}
        <IconButton 
      onClick={() => {
        console.log(id);
        history.push("/movies/"+id);
      }} 
      className="movie-show-button"
       color="primary"
        aria-label="more-info"
        >
      <InfoIcon />
        </IconButton>


<IconButton 
onClick={() => setShow(!show)} 
className="movie-show-button"
 color="primary"
  aria-label="hide"
  >
{show ? <ExpandLessIcon /> : <ExpandMoreIcon/>}
  </IconButton>
        </h2>
        <h3 className="movie-ratings" style={styles}>⭐{ratings}</h3>
      </div>
      {show ? <p className="movie-summary">{summary}</p>:"" } 
      <Counter />
      </CardContent>
    </Card>
  );
}
