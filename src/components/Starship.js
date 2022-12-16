import React from "react";
import { Link } from "react-router-dom";

const Starship = ({name, model, idShipUrl}) => {
  //extraer id de idShipUrl para poder acceder a los detalles de cada nave desde aqui con un link
  const idShip = idShipUrl.replace(/[^0-9]+/g, "");
  console.log(idShip)
  return(
    <Link to="/starshipsDetails">
    <ul className="text-slate-300 mt-7 bg-zinc-800/75 rounded p-4">
      <li className="uppercase">{name}</li>
      <li className="mt-1">{model}</li>
    </ul>
    </Link>
  )
}
export default Starship;