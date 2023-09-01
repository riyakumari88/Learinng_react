import React from 'react'

function Ternary() {

    const isGoingOut = false;

    //let answer
    // if(isGoingOut === true){
    //     answer = "Yes"
    // } else{
    //     answer ="No"
    // }    same can be written in one line


     let answer = isGoingOut === true ? "Yes" :"No"


  return (
    <div>
        <h1>Do I feel like going out to night??</h1>
        <div>
            <h1>{isGoingOut === true ? "Yes" :"No"}</h1>
            <h1>{answer}</h1>
        </div>
    </div>
  )
}

export default Ternary