import React from "react";
import Starship from "../components/Starship";


const Starships = ({ships}) => {
 
  return (
    <>
    <div className="container mx-auto">
      <div className="mx-auto w-10/12 sm:w-5/6 md:w-4/6 ">
        {ships.map((item, index) => (
          <Starship key={index} name={item.name} model={item.model} idShipUrl={item.url} />
        ))
        }
      </div>
    </div>
    </>
  );
}
export default Starships;






