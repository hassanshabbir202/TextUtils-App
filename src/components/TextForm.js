import React, { useState } from 'react'

const TextForm = (props) => {

     const [text , setText] = useState("")

    const convertUpperCase = () => {
        let newText = text.toUpperCase();
          setText(newText);
        props.showAlert("Converted to upperCase" , "success")
    }
    
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const convertLowerCase = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to lowerCase" , "success")
    }

    const handleclearText = () => {
      let newtext = "";
      setText(newtext)
      props.showAlert("Cleared Text" , "success")

    }

    const handleCopy = () => {
        let text = document.getElementById("my-box");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copy to Clipboard" , "success")

    }

    const hadleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed" , "success")

    }

  return (
    <>
     <div className="container">
       <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="my-box" onChange={handleChange} value={text} rows="6"></textarea>
        <button className="btn btn-primary my-3" disabled={text.length===0} onClick={convertUpperCase}>Convert UpperCase</button>
        <button className="btn btn-primary my-3 mx-2"  disabled={text.length===0} onClick={convertLowerCase}>Convert LowerCase</button>
        <button className="btn btn-primary my-3 mx-2"  disabled={text.length===0} onClick={handleclearText}>Clear Text</button>
        <button className="btn btn-primary my-3 mx-2"  disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary my-3 mx-2"  disabled={text.length===0} onClick={hadleExtraSpaces}>Remove Extra Spaces</button>
        </div>
     </div>

     <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
      <p><b>Read Mniutes : </b>{0.008 * text.split(" ").length}</p>
      <h2>Preview</h2>
      <p>{text==="" ? "Nothing to Preview!" : text}</p>
     </div>
    </>
  )
}

export default TextForm
