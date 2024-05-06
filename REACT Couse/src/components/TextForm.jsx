import React,{useState} from 'react'


export default function TextForm(props) {
  const [text,setText]=useState('enter text here');

  const handleCopy=()=>{
    console.log(" copy is clicked");
    var text=document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(text.value);
   
  }
  const handleLowClick=()=>{
    console.log("lowercase is clicked");
    setText("u hv clicked oh handlelowerclk");
    let lowerText=text.toLowerCase();
    setText(lowerText);
  }
  const handleUpClick=()=>{
    console.log("uppercase is clicked");
    setText("u hv clicked oh handleupclk");
    let upperText=text.toUpperCase();
    setText(upperText);
  }

  
  const handleOnChange =(event)=>{
    console.log("on change");
    setText(event.target.value);
  }

  
  // console.log(useState('enter text here'));
  return (
    
    <>
  <div>
<div className="mb-3">
  <h1>{props.heading}</h1>
  {/* <label for="myBox" class="form-label">Example textarea</label> */}
  <textarea className="form-control" id="myBox" rows="8"   value={text}  onChange={handleOnChange}></textarea>
  
</div>
<button className=' btn1 btn primary-btn' onClick={handleUpClick}>Convert uppercase to lowercase</button>
</div> 
<div><button className=' btn2 btn primary-btn my-3' onClick={handleLowClick}>Convert  lowercase to uppercase</button>
</div>
<div><button className=' btn3 btn primary-btn my-1' onClick={handleCopy}>copy</button></div>
<div>
  <h1>Summary of Text</h1>
  <p>{text.length} characters.
  </p>
  <p>{text.split(" ").length} Words</p>
</div>
    </>
    
  )
}
