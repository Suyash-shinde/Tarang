import React from "react";
import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {

  return (
   <>
    <Router>
      <Routes>
      <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/SignUp" element={<SignUp/>}/>
        </Routes>
    </Router>
    </> 
  )
}

export default App
