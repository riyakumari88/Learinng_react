import React from 'react';



function Jokes(props) {
  return (
    <div>
        <h3>Here id the rating::{props.ratig}</h3>
   {props.setup && <p>section:{props.setup}</p>}
   <span>{props.punchline}</span>
    </div>
  )
}

export default Jokes