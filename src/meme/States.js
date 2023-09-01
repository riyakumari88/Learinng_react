import React from 'react'

function States(){

    const [result,setResult] =React.useState("yes")
    console.log(result)

    function handleClick(){
     setResult("No")
    }
  return (
    <div className="state">
        <h1>Is state important to know</h1>
        <div onClick={handleClick}>
            <h1>{result}</h1>
        </div>
    </div>
  )
}

export default States