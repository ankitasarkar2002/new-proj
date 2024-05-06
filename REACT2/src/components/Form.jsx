import React,{useState} from 'react'
import Button from './Button'


export default function Form() {
    const [text,setText]=useState('');
    const [showingResult, setShowingResult] = useState(false);
    const handleClick=()=>{
        // console.log("button is clicked");
        
        const url="https://www.google.com/search?q="+ text;
        // console.log(url);
        window.open(url,'_self');
        setShowingResult(true);
      }

    const handleOnChange=(event)=>{
      console.log("on change")
      setText(event.target.value);
    };

  return (
    <div className="result-box">
      {
        showingResult ?null :<div className="container">
          <form>
              <h1>Generate Image</h1>
              <input name="inputFeild" type="search" placeholder='Enter your text' value={text} className="form-control inputBox" id="inputFeild" onChange={handleOnChange} />
  
            <Button text={"Submit"}  Handler={handleClick}/>
          </form>
        </div>
      }
    </div>
  )
}
