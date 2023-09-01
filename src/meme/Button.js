import React from 'react'

function Button(){
 function handleClicked(){
    console.log("I wAS clicked!!")
 }

 function handleMouseOver(){
    console.log("this image is overed !!")
 }

  return (
    <div>Button
        <img src="../images/money.jpg" onMouseOver={handleMouseOver} />
        <button onClick={handleClicked}>Click me</button>
    </div>
  )
}

export default Button