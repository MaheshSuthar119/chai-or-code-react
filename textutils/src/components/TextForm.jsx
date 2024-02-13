import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';

function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase wase clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    //  text = "hello world"; // wrong way yo change the state
    // setText("new text"); // Correct way to change the state
  return (
      
      <div>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
            <textarea className='form-control' value={text} onChange={handleOnChange} id="myBox" row="8"/>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  );
}

export default TextForm;