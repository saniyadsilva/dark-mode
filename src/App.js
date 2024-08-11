import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';//imrs

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#343a40';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
    }
  }
  return (
    <>
<Navbar title ="textUtils" mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">
<TextForm heading = "enter the text to analyze" mode={mode}/>
{/* <About/> */}
</div>
</>
);
}

export default App;
