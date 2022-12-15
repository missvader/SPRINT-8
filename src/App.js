import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Starships from "./pages/Starships";
import Home from './pages/Home';
import './App.css';
import StarshipDetail from './components/StarshipDetail';
import Header from './components/Header';

function App() {
 
  return (
    <>
      <Header/>
      < Routes >
        < Route path='/' element = { <StarshipDetail/>} />
        < Route path = "home" element = { <Home/>}/>
        < Route path = "starships" element = {<Starships/> }/>
      </ Routes >
    </>  
  );
}

export default App;
