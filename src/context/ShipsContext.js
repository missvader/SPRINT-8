import React, {useState, useEffect} from "react";
import axios from "axios";
import { createContext } from "react";

// Definimos el contexto
export const ShipsContext = createContext();

// Creamos el wrapper del Provider
export const ShipsContextProvider= (props) => {
	//inicializamos el estado del listado de naves con un array vacio
  const [ships, setShips] = useState([]);
  const baseURL = "https://swapi.dev/api/starships/?page=1";

	const getShips = () =>{
    axios.get(baseURL)
    .then((response) => {
      setShips(response.data.results);
    });
   }
   const getId = (ships)=> {
    const idShip = ships.map(item => (item.url).replace(/[^0-9]+/g, ""));
    return idShip;
   }
   useEffect(() => {
    getShips();
    getId(ships);
   }, []);
   console.log(ships);
	// Retornamos el Provider con el estado que será global con la función que lo actualiza
	return (
    <ShipsContext.Provider value={{
      ships, 
      getShips,
      getId
      }}>
      {props.children}
    </ShipsContext.Provider>);
};



