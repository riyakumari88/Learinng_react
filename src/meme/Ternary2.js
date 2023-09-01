import React from 'react'

function Ternary2(){

    const [isGooingOut,setIsGoingOut]=React.useState(true)

    function changeResult(){
        setIsGoingOut(prevs => !prevs)
           
    }
  return (
    <div>
        <h1>Do I feel to go out at night ?</h1>
        <div onClick={changeResult}>
            <h1>{isGooingOut ? "yes":"no"}</h1>
        </div>
    </div>
  )
}

export default Ternary2