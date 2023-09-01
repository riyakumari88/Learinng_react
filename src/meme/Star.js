import React from 'react'

function Star(props){
   let starIcon = props.isFilled ? "star.png" :"estar.jpg"
  return (
    <img onClick={props.handleClick}
     src={`../images/${starIcon}`}
     className="card-favorite" />
  )
}

export default Star