import React from "react";
import { Link } from "react-router-dom";

const Starship = ({name, model, idShip}) => {
  //extraer idShip de item.url para poder acceder a los detalles de cada nave desde aqui con un link (pero en Starships.js y lo pasamos aqui como prop)
  
  return(
    <Link to={"/starships/"+idShip}>
    <ul className="text-slate-300 mt-7 bg-zinc-800/75 rounded p-4" >
      <li className="uppercase">{name}</li>
      <li className="mt-1">{model}</li>
    </ul>
    </Link>
  )
}
export default Starship;