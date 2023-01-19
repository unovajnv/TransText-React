import React ,{ useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   //Link
// } from "react-router-dom";

function App() {
  const [mode , setMode]=useState('light');
  const [alert , setAlert]=useState(null);
  

  const showAlert=(message , type)=>{
     setAlert({
       msg : message,
       type : type
     })
     setTimeout(()=>{
      setAlert(null);
     } ,2000)
  }
  
  const toggleMode=()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor ='#081f4c';
      showAlert("Dark mode enabled", "Success")
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode enabled", "success")
    }
  }
  return (
   <>
   {/* <Router> */}
  <Navbar title="TransText" home="Home" about="About" mode = {mode} toggleMode={toggleMode} />
  <Alert alert = {alert} />
  {/* <div className="container my-3">
     <Routes>
          <Route exact path="/about" element = {<About mode = {mode} />}/>
          <Route exact path="/" element = {<Textform showAlert={showAlert} heading ="Enter the text to analyze" mode = {mode} />}/>
    </Routes>
  </div>
  </Router>  */}
   <Textform showAlert={showAlert} heading ="Enter the text to analyze" mode = {mode} />
   </>
  );
}

export default App;
  
