import React from 'react';
import style from'./Buttons.module.css'
const Buttons = ({onButtonClick}) => {
    const buttonNames = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '.', '+', '-', '=', '*', '/'];
    return (
        <div className= {style.btn}>

        {buttonNames.map((buttonName) => (
          <button key={buttonName}
          className= {style.botton}
          onClick={() => onButtonClick(buttonName)}
          >
            {buttonName}
        </button>))}
        </div>
    )
}

export default Buttons;