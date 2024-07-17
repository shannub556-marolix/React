
import React from "react";
import { Route,Routes } from "react-router-dom";
import First from "./components/First";
import Second from "./components/Second";
import Home from "./components/Home";
import './App.css'
import NavBar from "./components/Navbar";

function App() {
  return ( <div>
    <NavBar/>
    <Routes>
      <Route path='/first' element={<First/>} />
      <Route path='/first/second' element={<Second/>}/>
      <Route path='' element={<Home/>} />
    </Routes>

  </div> );
}

export default App;