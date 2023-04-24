import "./App.css";
import React , {useState} from 'react'


import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
//import About from "./component/About";
import Alert from "./component/Alert";

function App() {
  const [mode , setMode] = useState('light'); // whether dark mode is available or not
  const [alert , setAlert] = useState(null); // whether dark mode is available or not
  
  const toggleMode=()=>{
    if (mode==='light'){
      setMode ('dark')
      document.body.style.backgroundColor = '#073f70';
     showAlert (" Dark mode has been enabled" , "success");
    }
    else{
      setMode  ('light')
       document.body.style.backgroundColor = 'white';
       showAlert (" Light mode has been enabled" , "success");
    }
  }
  const showAlert =(message , type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout( ()=>{
     setAlert(null);
    },1600);
  }

  return (
    <>
      <Navbar title="Textutils"  mode = {mode} toggleMode ={toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3" >
        <Textform showAlert={showAlert} heading="enter the text here"  mode = {mode}  />
        {/* <About/> */}
        
      </div>
    </>
  );
}

export default App;
