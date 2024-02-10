import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter]  = useState(15);

  
  // let  counter = 15

  const addValue = () => {
    if(counter<21){
      console.log("clicked", counter);
      counter = counter + 1;

      setCounter(counter);
    }
    // console.log("value added", Math.random());
  }

  const removeValue = () => {
    if(counter>0){

      setCounter(counter - 1);
    }
  }
  return (
    <>
        <h1>Chai aur react</h1>
        <h2>Counter value: {counter}</h2>

        <button
        onClick = {addValue}
        >Add Value</button>
        <br></br>
        <button
        onClick={removeValue}
        >remove Value</button>

    </>
  )
}

export default App
