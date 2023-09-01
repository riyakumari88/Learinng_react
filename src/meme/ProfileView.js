import React from 'react';
import Star from "./Star";

function ProfileView(){

const [contact, setContact]=React.useState({
    firstName:"John",
    lastName:"Doe",
    phone:"+1 (719) 555-1212",
    email:"itsmyname@gmail.com",
    isFavorite:false
})


let starIcon = contact.isFavorite ? "star.png" :"estar.jpg"

// function toggleFavorite(){
// setContact(
//     prevv =>{
//         return {
//             isFavorite: !prevv.isFavorite
//         }
//     }
// ) Aother way to write the above code 
// }  so bug is fixed

function toggleFavorite(){
    setContact( prev =>{return{...prev,isFavorite:!prev.isFavorite}})
}
  return (
    <main>
        <article className="card">
            <img src="../images/money.jpg" className="card--image"/>
            <div className="card--info">
                <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
{/*                   
                <img onClick={toggleFavorite}
     src={`../images/${starIcon}`}
     className="card-favorite" /> */}

                <h2 className="card--name">{contact.firstName} {contact.lastName}</h2>
                <p className="card--contact">
                 {contact.phone}
                </p>
                <p className="card--contact">{contact.email}</p>
            </div>
        </article>
    </main>
  )
}


export default ProfileView