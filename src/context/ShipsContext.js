import React, {useState} from "react";
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
  const [hasMore, setHasMore] = useState(true)

  const baseURL = `https://swapi.dev/api/starships/?page=${page}`;


  const getShips = () => {
    axios.get(baseURL)
      .then((response) => {
        setShips((prev) => prev.concat(response.data.results));
        
      });
  }
  console.log(page)
  const stopScroll = () => {
    axios.get(baseURL)
        .then((res) => {
            res.data.next == null ? setHasMore(false) : setHasMore(true)
        })
  }
   
	// Retornamos el Provider con el estado que será global con la función que lo actualiza
	return (
    <ShipsContext.Provider value={{
      ships, 
      ship,
      setShip,
      getShips,
      setShips,
      page,
      setPage, 
      hasMore, 
      stopScroll
      }}>
      {props.children}
    </ShipsContext.Provider>);
};



