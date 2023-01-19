import React ,{useState} from 'react'


export default function Textform(props) {

   const handleUpClick =()=>{
       // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase! ", "success")
    }
    const handleLoClick =()=>{
        // console.log("Uppercase was clicked" + text)
         let newText = text.toLowerCase();
         setText(newText);
         props.showAlert("Converted to LowerCase! ", "success")
     }
     const handleClearClick =()=>{
        // console.log("Uppercase was clicked" + text)
         let newText = ("");
         setText(newText);
         props.showAlert("text Cleared! ", "success")
     }
    const handleOnchange =(event)=>{
        //console.log("On Change");
        setText(event.target.value);
        
    }

    const [text , setText] = useState('')

  return (
    <>
    <div className= "container  my-2" style = {{color: props.mode==='dark'?'white':'black'}}>
    <div className="mb-3">
       <label htmlFor="myBox" className="  form-label"><h1>{props.heading}</h1></label>
       <textarea className=" my-3 form-control"  value = {text} onChange ={handleOnchange}  style = {{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='light'?'white':'#0d1424'}} id="myBox" rows="8"></textarea>
    </div>
    <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
    <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3"  style ={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
        <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter the text to preview Here.."}</p>
    </div>

    </>
     
  )
}

