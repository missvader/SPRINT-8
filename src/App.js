import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {useState, useEffect} from "react";
import axios from 'axios';
import Starships from "./pages/Starships";
import Home from './pages/Home';
import './App.css';
import StarshipDetail from './components/StarshipDetail';
import Header from './components/Header';

const baseURL = "https://swapi.dev/api/starships/?page=1";
const imgBaseURL = "https://starwars-visualguide.com/assets/img/starships/5.jpg"
function App() {
 //inicializamos el estado del listado de naves con un array vacio
 const [ships, setShips] = useState([]);
 
 useEffect(() => {
  axios.get(baseURL)
    .then((response) => {
      setShips(response.data.results);

    });
 }, []);
 console.log(ships);
 
  return (
    <>
      <Header/>
      < Routes >
        
        < Route path = "/" element = { <Home/>}/>
        < Route path = "starships" element = {<Starships ships={ships}/> }/>
        < Route path = "starshipsDetails" element = { <StarshipDetail imgBaseURL={imgBaseURL}/>} />
      </ Routes >
    </>  
  );
}

export default App;
