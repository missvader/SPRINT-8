import React from "react";
import Starship from "../components/Starship";
import { useEffect } from "react";
import { useContext } from "react";
import { ShipsContext } from "../context/ShipsContext";
import InfiniteScroll from "react-infinite-scroll-component";
import "../App.css";
const Starships = () => {
  const {ships, getShips, setShips, page, setPage } = useContext(ShipsContext)

  useEffect(() => {
    getShips(setShips)
  },[page])
  console.log(ships)
  /*NoTA: el infinity scroll siempre tiene que englobar al elemento contenedor de la lista a mostrar (en este caso es el div) */
  return (
    <>
    <div className="container container-infinite mx-auto">
      <InfiniteScroll
        dataLength={ships.length}
        next={
          () => setPage((prev) => prev + 1)
        }
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
      <div className="mx-auto w-10/12 sm:w-5/6 md:w-4/6 min-h-screen">
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
      </InfiniteScroll>
      
    </div>
    </>
  );
}
export default Starships;


