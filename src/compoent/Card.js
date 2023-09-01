import React from 'react';

// const nums =[1, 2, 3, 4, 5]
//  const square= nums.map(function(item){
//  return item*item
//  })
//  console.log(square)


//  const names =["alice","bob","cahrie","dellimeae"]
//  const changes = names.map( function(item){
//   return (item[0].toUpperCase() + item.slice(1))
//  })

//  console.log(changes)


//  const pokemon =["Pyshyduk","Huthout","Pichachu"]
// const vv = pokemon.map(  (item)=> {
//    return  `<p>${item}<p/>`
//   })
//   console.log(vv)

// const color =[<h3>Red</h3>,<h3>Blue</h3>,<h3>Yellow</h3>]
//  const r=color.map( value => {
//  return color.map( {value})
// }
// )
// console.log(r)
const Card = (props) => {
  let badgeText 
  if(props.item.openSpots === 0){
    badgeText = "SOLD OUT"
  }
  else if(props.item.location === "Online"){
    badgeText =" ONLINE"
  }
  return (
    <div className="card">
     {badgeText &&<div className="card-badge">{badgeText}</div>}
    <img className="iing" src={`../images/${props.item.coverImg}`}  alt="ddata"/>
    
    <div className="stats">
     <img className="star" src="../images/star.png"/>
     <span>({props.item.stats.rating})
     </span>
     <span className="grey">{props.item.stats.reviewPoints} . </span>
     <span className="grey"> {props.item.location}</span>
    </div>
    <p>{props.item.title}</p>
    <p><span className="bold">Join the session and ejoy the stuff..</span></p>
    <h6>From$ :{props.item.price}/person</h6>
    </div>
  )
}

export default Card
