import './App.css';

export default function App() {
  console.log("Hi");
 const users=[
   
  {name: "amar",pic:"https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Picture.jpg"},
  {name: "vishwa",pic:"https://live.staticflickr.com/3893/14921394066_cb305327fe_b.jpg"},
  {name: "prakash",pic:"https://www.teahub.io/photos/full/249-2492643_profile-dp-for-boys-whatsapp.jpg"},
   {name:"venkat",pic:"https://www.photodoozy.com/uploads/cool-profile-pictures-stylish-dp-for-boys.jpg"},];
  
 
  
  return (
     <div className="App">
    
    {users.map((ur)=> (
      <Msg 
      name={ur.name}
      pic={ur.pic}
      
      />
      ))}
    </div>

   
  );
}
  function Msg({name,pic}){
   
  return(
     <div>
      <img className="user-pic" src={pic} alt="name"/>     
       <h1 className="user-name">🙋‍♂️,{name}!!!😍</h1>
       
       </div>
    );
  }
 