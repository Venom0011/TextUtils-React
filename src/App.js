import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import { BrowserRouter as Router, Route,Routes } from "react-router-dom";


function App() {
  const [mode,setMode]=useState('light');

const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='grey';
  }else{
    setMode("light");
    document.body.style.backgroundColor='white';
  }
}
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode} />
      
      <div className="container">
      {/* <Routes>
        <Route exact path="/" element={ */}
        <TextForm title="Enter the text to analyse" mode={mode} />
        
        {/* }>
      </Route> */}

      {/* <Route exact path="/about" element={ 
      <About />
      
      }>
      </Route>
      </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
