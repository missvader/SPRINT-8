import React from "react";
import Starship from "../components/Starship";
import { useContext } from "react";
import { ShipsContext } from "../context/ShipsContext";


const Starships = () => {
  const {ships } = useContext(ShipsContext)
  console.log(ships)
  return (
    <>
    <div className="container mx-auto">
      <div className="mx-auto w-10/12 sm:w-5/6 md:w-4/6 ">
        {ships.map((item, index) => (
          <Starship 
            key={index} 
            name={item.name} 
            model={item.model} 
            idShip={(item.url).replace(/[^0-9]+/g, "")} 
          />
        ))
        }
      </div>
    </div>
    </>
  );
}
export default Starships;


