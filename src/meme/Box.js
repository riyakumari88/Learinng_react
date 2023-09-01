import React from 'react';
import BoxData from './BoxData';
import BoxNew from './BoxNew';

function Box(props){
// const style={
//     backgroundColor: props.darkMode ? "#222222" : "#cccccc"
   
// }
    console.log(BoxData)
const [square,setSquare] = React.useState(BoxData)

function toggle(id){
 setSquare( prevSquares =>{
 return prevSquares.map( (square)=>{
   return square.id === id ? {...square, on:!square.on} : square
 })
 })
}
 const value = square.map( square =>(

    // <div style={style} className="box" key={square.id}></div>
    
    <BoxNew
     key={square.id} 
    
     on={square.on} 
     toggle={()=>toggle(square.id)}

     />
 ))
  return (
    <div>Box
        {value}
    </div>
  )
}

export default Box