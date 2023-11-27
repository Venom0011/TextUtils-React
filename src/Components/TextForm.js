import React, { useState } from "react";

export default function TextForm(props) {
    const [text,setText]=useState("")

    const handleupEvent=()=>{
       setText(text.toUpperCase());
    }
    const handleOnChange=(event)=>{
    setText(event.target.value);
    }

    const handlelowEvent=()=>{
        setText(text.toLowerCase());
    }
    const handleClrEvent=()=>{
        setText("");
    }
    const handleRemoveSp=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "));
    }

    const handleCopy=()=>{
       var text= document.getElementById("myform");
       text.select();
        navigator.clipboard.writeText(text.value)
    }
    
  
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <div className="form-group">
        <h1>{props.title}</h1>
        <textarea
          className="form-control"
          id="myform"
          value={text}
          onChange={handleOnChange}
          rows="8"
        ></textarea>
      </div>
      <button  className="btn btn-info mx-1 my-1" onClick={handleupEvent}>
        Convert to UpperCase
      </button>
      <button  className="btn btn-warning mx-1 my-1" onClick={handlelowEvent}>
        Convert to LowerCase
      </button>
      <button className="btn btn-success mx-1 my-1" onClick={handleCopy}>
      Copy text
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleRemoveSp}>
       Remove Space
      </button>
      <button type="reset" className="btn btn-danger mx-1 my-1" onClick={handleClrEvent}>
       Clear Text
      </button>
      </div>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
        <h3>Text Sumarry</h3>
        <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
        <p>{ 0.08 * text.split(' ').filter((element)=>{return element.length!==0}).length } minutes to read </p>
      </div>
      </>
  );
}
