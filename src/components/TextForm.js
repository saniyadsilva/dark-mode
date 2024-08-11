import React, {useState} from 'react';


export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = ()=>{
    console.log("Uppercase was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
  }

  const HandleOnChange = (event)=>{
    console.log("on change");
    setText(event.target.value);
  }

  const handleCopy = () =>{
    console.log("i am copy");
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >  
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={HandleOnChange} style={{backgroundColor:props.mode==='dark'?'#343a40':'white', color:props.mode==='dark'?'white':'black'}}  id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
      <h1>your text summary </h1>
      <p>{text.split (" ").length} words and {text.length} characters</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  );
}

