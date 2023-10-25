import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to upperCase ! "," Success ");
  }
  const handleLoClick = ()=>{
    console.log("lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to lowercase ! "," Success ");
  }

  const handleeraseClick = ()=>{
    let newText ='';
    setText(newText);
    props.showAlert(" All erased ! "," Success ");
  }
  
  const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value);
    
  }
  
  const handleExtraSpaces =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Extra space removed ! "," Success ");
  }
  
  const [text, setText] = useState('');
  // text="new text";  wrong way to change the state
  // setText("new text");
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
     <div className="mb-3">
     <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
     </div>
     <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to UPPERCASE</button>
     <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to lowercase</button>
     <button className="btn btn-primary mx-1" onClick={handleeraseClick} >Erase all</button>
     <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >Remove extra space</button>
    </div>
    <div className="conatiner my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length } Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
