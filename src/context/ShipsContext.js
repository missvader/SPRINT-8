import React, {useState} from "react";
import axios from "axios";
import { createContext } from "react";

// Definimos el contexto
export const ShipsContext = createContext();

// Creamos el wrapper del Provider
export const ShipsContextProvider= (props) => {
	//inicializamos el estado del listado de naves con un array vacio
  const [ships, setShips] = useState([]);
  const baseURL = "https://swapi.dev/api/starships/?page=1";
  const imgBaseURL = "https://starwars-visualguide.com/assets/img/starships/5.jpg"

	const getShips = () =>{
    axios.get(baseURL)
    .then((response) => {
      setShips(response.data.results);
    });
   }

	// Retornamos el Provider con el estado que será global con la función que lo actualiza
	return (
    <ShipsContext.Provider value={{ships, setShips, getShips}}>
      {props.children}
    </ShipsContext.Provider>);
};



