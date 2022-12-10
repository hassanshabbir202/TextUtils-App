import React, { useState } from 'react'
import Alerts from './components/Alerts'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import "./App.css"
const App = () => {
  
  const [mode , setMode] = useState("light")
  const [alert , setAlert] = useState(null)

  const showAlert = (type, message) => {
    setAlert({
     msg: message,
     type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
}

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark Mode has been Enabled!" , "success");
      // document.title = "Textutils - Dark Mode Enabled";
    }else{
      setMode("light")
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "black";
      showAlert("Light Mode has been Enabled!" , "success");
      // document.title = "Textutils - Light Mode Enabled";
    }
  }


 

  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} enableMode={toggleMode}/>
      <Alerts alert={alert}/>
   <TextForm heading="Enter Your Text to Analyze Below" showAlert={showAlert}/>
      
    </>
  )
}

export default App
