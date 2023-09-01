import React  from 'react';
import { useState } from 'react';

function DemoButton (){

    // const thingsArray = ["Thing 1", "Thing 2"]

    // const newData = thingsArray.map( item=> <p key={item}>{item}</p>)

    // function addItems(){
    //     const newThing = `Thing ${thingsArray.length +1}`;
    //     thingsArray.push(newThing);
    //     console.log(thingsArray)
    //}


    const [things , setThigs]=useState(["Thing 1","Thing 2"]);

    // function addItems(){
    //     const newThing = `Thing ${things.length +1}`
    //     setThigs(prevState =>[...prevState,newThing])
    // } this can be written in one more way

    function addItems(){
      setThigs(prevv =>{
        return [...prevv, `Thing ${prevv.length +1}`]
      })
    }


    const newData = things.map( item=> <p key={item}>{item}</p>)
  return (
    <div>
        <button onClick={addItems}>
           Add the button
        </button>
        {newData}
    </div>
  )
}

export default DemoButton