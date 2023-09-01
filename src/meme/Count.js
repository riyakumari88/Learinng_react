import React from 'react'

function Count(props){

  console.log("count is rendered")
  return (
    <div><h1>
            {props.number}</h1></div>
  )
}

export default Count