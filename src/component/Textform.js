import React, { useState } from "react";
 
export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert ("converted to uppercase" , "success");
  }
  const handleloClick = () => {
   let newText = text.toLowerCase();
    setText(newText);
    props.showAlert ("converted to lowercase" , "success");
  };

const cleartext = () => {
   let newText = "";
    setText(newText);
    props.showAlert ("Text is cleared" , "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

//  const handleCopy = () => {
//   var text = document.getElementById("myBox");
//   text.target.select();
//   navigator.clipboard.writeText(text.value);
//  };
  const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
       props.showAlert ("Removed extra spaces" , "success");
    };

  const [text, setText] = useState("");
  //setText("new text");
  return (
    <>
    <div className="container" style = {{color:props.mode==='dark'?'white':'#073f70'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="mybox" value={text}  style={{backgroundColor : props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'#073f70' }} onChange={handleOnChange}rows="8"></textarea>
      </div>
      <button className=" btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
      <button className=" btn btn-primary mx-3" onClick={handleloClick}>convert to lowercase</button>
      <button className=" btn btn-primary" onClick={cleartext}>Clear Text</button>
      {/* <button className=" btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button> */}
      <button className=" btn btn-primary mx-2" onClick={handleExtraSpaces}>remove extra spaces</button>
    </div>
    <div className="container my-10" style = {{color:props.mode==='dark'?'white':'#073f70'}} >
      <h1>your text summary</h1>
      <p>{text.split(" ").length} words {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read </p>
      <h2>PREVIEW</h2>
      <p>{text.length>0?text:"Enter some text to preview it here"}</p>
    </div>
    </>
  );
}
