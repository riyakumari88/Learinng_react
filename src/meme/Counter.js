import React from 'react';
import Count from './Count';

function Counter() {
  const [value, setValue] = React.useState(0)

  function increment() {
    setValue(function (oldValue) {
      return oldValue + 1;
    })
  }
  function decrement() {
    setValue(oldValue => setValue(oldValue - 1))
  }
  console.log("App is rendered")
  return (
    <div>
      <button onClick={increment}>
        +
      </button>
      {/* <div><h1>
            {value}</h1></div> */}
            <Count number={value} />
      <button onClick={decrement}>
        -
      </button>
    </div>
  )
}

export default Counter