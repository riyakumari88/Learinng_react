import ReactDOM from "react-dom";
import React from "react";
import App from "./App.js";

import Button from "./meme/Button";
import Jokes from "./compoent/Jokes.js";
import jokeData from "./compoent/jokeData.js"





function Page(){

  const jokeElements = jokeData.map( joke =>{
     return <Jokes setupp={joke.setup} punch={joke.punchline}/>
  })

  return (
    <>
    <App />
    
{/* 
     <Card 
    img="../images/r.png"
    rating={4.0}
    reviewPoints={"(5)"}
    title="Kuvh kuvh hott hai"
    price={234}
    country="USA"
    />
     <Card 
    img="../images/r.png"
    rating={5.0}
    reviewPoints={"(34)"}
    title="kya karna hai jankaar "
    price={239}
   country="India"
    />

<Card 
    img="../images/r.png"
    rating={3.7}
    reviewPoints={"(47)"}
    title="none"
    price={120}
    country="Keniya"
    /> 
 */}

    
    
     <Jokes 
   
    punchline="AA" 
    ratig={4/10}
    arr={[{name:"d"}]}
    />
    <Jokes 
    setup="bb"
    punchline="BB"
    ratig={6/10} />
    <Jokes 
    setup="cc"
    punchline="CC"
    ratig={7/10} />
    <Jokes 
    setup="dd"
    punchline="DD"
    ratig={10/10} />
    <Jokes 
    setup="ae"
    punchline="EA"
    ratig={4/10} /> 


   {/*}  <Contact 
    img="../images/r.png"
    name="milli" 
    phone="3344-453"
    email="kiity@gmail.com"/>

     <Contact
    img="../images/r.png"
    name="millo" 
    phone="3349-453"
    email="kiit6y@gmail.com" /> 

     <Contact
    img="../images/r.png"
    name="milzi" 
    phone="3344-4053"
    email="kiitykaa@gmail.com" />

    <Contact
    img="../images/r.png"
    name="millmai" 
    phone="3344-453"
    email="kiitynnm@gmail.com" />  */}
    {jokeElements}

    </>

  )
}

ReactDOM.render(<Page />,document.getElementById("root"))
