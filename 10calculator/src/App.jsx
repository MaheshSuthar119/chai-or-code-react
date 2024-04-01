import { Button } from 'bootstrap';
import style from'./App.module.css'
import Display from './components/Display'
import Buttons from './components/Buttons';
import { useState } from 'react';

function App() {
  let [calVal, setCalVal] = useState('');
  const onButtonClick = (buttonText) => {
    if(buttonText === 'C'){
      setCalVal('')
    }
    else if(buttonText === '='){
      const result = eval(calVal)
      setCalVal(result);
    }
    else{
      const newDisplayValue = calVal + buttonText
      setCalVal(newDisplayValue)
    }
  }
  return (
    <div  className= {style.calculator}>
       <Display displayValue={calVal}/>
 
        <Buttons onButtonClick={onButtonClick}/>
      
    </div>
  )
}

export default App
