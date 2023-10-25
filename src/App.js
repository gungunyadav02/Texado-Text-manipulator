//import logo from './logo.svg';
import './App.css';


import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import React from "react";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() =>{
    setAlert(null);
    },2000);
  }

  return (
   <>
     <Router>
         <Navbar title="TextUtils" />
         <Alert alert = {alert}/>  
         <div className="container my-3">
        <Routes>   
          <Route exact path="/about"element={<About/>}/>   
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below"/>}/>
        </Routes>
         </div>
     </Router>
   </>
  );
}

export default App;

