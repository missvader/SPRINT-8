import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Starships from "./pages/Starships";
import Home from './pages/Home';
import './App.css';

function App() {
  //inicializamos el estado del listado de naves con un array vacio
  const [ships, setShips] = useState([]);
  
  //instancia a axios de la url de la api(la guardamos en una const) con axios.create()
  const swapi = axios.create({
    baseURL:"https://swapi.dev/api/starships/"
  })
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
