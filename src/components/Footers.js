import React from "react";
import { MdAndroid } from "react-icons/md";
import { GoBroadcast } from "react-icons/go";
import { FaAmazon } from "react-icons/fa";

 function Footers(){
    return(
        <div className="footer-items">
            <MdAndroid id="on" size="50px" color="yellow" />
            <FaAmazon  id="one" size="50px" color="white" />
         <GoBroadcast id="onw" size="50px" color="purple"/>
        </div>
    )
 }
 export default Footers;