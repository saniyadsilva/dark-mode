import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';//imrs

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [fmode, setfMode] = useState('light');

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);//setTimeout
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#343a40';
      showAlert("dark mode has been enabled","success");
      document.title='textUtils-darkmode';
      // setInterval(() => {
      //   document.title='redirecting';
      // }, 2000);
      // setInterval(() => {
      //   document.title='loaded';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("light mode has been enabled","success");
      document.title='textUtils-lightmode';
    }
  }

  const toggleMode1 = ()=>{
    if(fmode === 'light'){
      setfMode('dark');
      document.body.style.backgroundColor ='#343a40';
      showAlert("dark mode has been enabled","success");
    }
    else{
      setfMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("light mode has been enabled","success");
    }
  }


  return (
    <>
    <Router>
<Navbar title ="textUtils" mode={mode} mode1 ={fmode}toggleMode={toggleMode} toggleMode1={toggleMode1}/>
<Alert alert={alert}/>
<div className="container my-3">

  {/* reactrouter.com/web/guides/quick-start */}
<Routes>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/">
          <TextForm showAlert={showAlert}heading = "enter the text to analyze" mode={mode}/>
          </Route>
</Routes>         
</div>
</Router>
</>
);
}

export default App;
