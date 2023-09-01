import React from 'react'

function BoxNew(props){

  const[on ,setOn] = React.useState(props.on)
  
    const style={
     backgroudColor:on ? "#222222" :"transparent"
     }

     function toggle(){
      setOn(prevOn =>! prevOn)
     }
   
  return (
    //<div style={style} className="Box" onClick={()=>{props.toggle(props.id)}}>clickes</div>
   // <div style={style} className="box" onClick={props.toggle}></div>
    <div style={style} className="box" onClick={toggle}></div>
  )
}

export default BoxNew