import React, {useState, useEffect} from "react";
import axios from "axios";
import { createContext } from "react";


// Definimos el contexto
export const ShipsContext = createContext();


// Creamos el wrapper del Provider
export const ShipsContextProvider= (props) => {
	//inicializamos el estado del listado de naves con un array vacio
  const [ships, setShips] = useState([]); //storing list
  const [ship, setShip] = useState({});
  const [page, setPage] = useState(1); 
  
  
  console.log(ships);
  const baseURL = `https://swapi.dev/api/starships/?page=${page}`;
  const getShips = (setShips) => {
    axios.get(baseURL)
      .then((response) => {
        setShips((prev) => prev.concat(response.data.results));
      });
  }
  console.log(page)
   
	// Retornamos el Provider con el estado que será global con la función que lo actualiza
	return (
    <ShipsContext.Provider value={{
      ships, 
      ship,
      setShip,
      getShips,
      setShips,
      page,
      setPage
      }}>
      {props.children}
    </ShipsContext.Provider>);
};



