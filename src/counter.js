import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
// import Stack from '@mui/material/Stack';
// import MailIcon from '@mui/icons-material/Mail';

import {useState,useEffect} from "react";
export function Counter(){
    const [like,setLike]=useState(0);
    const [dislike,setDislike]=useState(0);
    const incrementLike = () => setLike(like+1);

   useEffect(()=>{
     console.log("Like is Updated",like);
   },[like,dislike]);
    return(
      <div 
      className="counter-container">


      <IconButton 
      className="likes-dislikes"
      onClick={incrementLike}
      aria-label="like movie"
      color="primary"
      >
    

<Badge badgeContent={like} color="primary">
👍 {like}


</Badge>
</IconButton>


<IconButton
   className="likes-dislikes"
    onClick={()=>{setDislike(dislike+1);}}
    aria-label="dislike movie"
    color="error"
      >
      <Badge badgeContent={dislike} color="error">
    👎 {dislike}
   </Badge>
   </IconButton>
  </div>
    );
  }

