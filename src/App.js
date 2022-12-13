import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Starships from "./pages/Starships";
import Home from './pages/Home';
import './App.css';

function App() {
 
  return (
    <>
      < Routes >
        < Route path = "/" element = { <Starships/>}/>
        < Route path = "home" element = { <Home/> }/>
      </ Routes >
    </>  
  );
}

export default App;
