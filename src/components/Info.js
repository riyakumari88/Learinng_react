import React from "react";
import profile from "./profile.jpg"

export default function Info(){
    return(
        <div className="info">
         <image  id ="img"src={profile}/>
        <h2>Riya Kumari</h2>
        <h5>riyakumari@gmail.com</h5>
        <p id="data">fronted developer </p>
        </div>
        
    )
}