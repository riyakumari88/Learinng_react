import ReactDOM from "react-dom";
import React from "react";
import Nv from "./compoent/Nv.js";
import PhotoGrid from "./compoent/PhotoGrid.js"
import Card from "./compoent/Card.js";
import Contact from "./compoent/Contact.js";
import Jokes from './compoent/Jokes.js';
import data from "./compoent/data.js";


import Header from "./meme/Header.js";
import Form from "./meme/Form.js";
import DemoButton from "./meme/DemoButton.js";
import States from "./meme/States.js";
import Counter from "./meme/Counter.js";
import Ternary from "./meme/Ternary.js";
import Ternary2 from "./meme/Ternary2.js";

import ProfileView from "./meme/ProfileView.js";

import Header1 from "./meme/Header1.js";
import Body from "./meme/Body.js";

import Box from "./meme/Box.js";


export default function App(){

    // const cards = data.map( (item)=>{
    //     return (
    //         <Card 
    //         key={item.id}
    //         item={item}
    //         // image={item.coverImg}
    //         //  rating= {item.stats.rating}
    //         // reviewCount={item.stats.reviewCount}
    //         //   location={item.location}
    //         //  title={item.title}
    //         //  price={item.price}
    //         //   openSpots ={item.openSpots}

    //         />
    //     )
    // })
    // return(
    //     <div>
    //         <Nv />
    //         <PhotoGrid />
    //         <section className="cards-list">
    //            {cards} 
    //         </section>
            
    //     </div>
    // )

const [user ,setUser]=React.useState("joe")

    return (
        <div>
            <Header />
            <Form />
            <Counter />
            <ProfileView />

            <Header1 user1={user}/>
            <Body user1={user}/>

            {/* <Box darkMode={true}/> */}
           

         
            
            
            
        </div>
    )
}