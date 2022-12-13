import React from "react";
import axios from 'axios';
import Header from "../components/Header";
import Starship from "../components/Starship";
import {useState, useEffect} from "react";

const baseURL = "https://swapi.dev/api/starships/";

const Starships = () => {
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
    <div className="container mx-auto">
      <div className="mx-auto w-10/12 sm:w-5/6 md:w-4/6 ">
        {ships.map((item, index) => (
          <Starship key={index} name={item.name} model={item.model}/>
        ))
        }
      </div>
    </div>
    </>
  );
}
export default Starships;






