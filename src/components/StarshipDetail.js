import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ShipsContext } from "../context/ShipsContext";
import Pilots from "./Pilots";
import Films from "./Films";
const StarshipDetail = () => {
  const {ship,setShip} = useContext(ShipsContext)
  const {id} = useParams();

  //console.log(useParams());
  const urlSingleStarship = `https://swapi.dev/api/starships/` + id ;
  const imgVisualGuide = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg` ;
  const imgError = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
  const getShip = () =>{
    axios.get(urlSingleStarship)
    .then((response) => {
      setShip(response.data);
    });
  }
  
   useEffect(() =>{
    getShip();
    // eslint-disable-next-line
   }, [])
   console.log(ship)
   
  return (
    <>
    <div className="card w-96 my-10 bg-black  shadow-xl mx-auto  grid w-2/3 sm:w-5/6 lg:w-4/6 xl:w-3/6  ">
      <figure><img 
          src= {imgVisualGuide}
          alt="starship" className="w-full"
          onError={(e) => (e.currentTarget.src = imgError)}/></figure>
        <div className="card-body ">
          <h2 className="card-title uppercase">{ship.name}</h2>
          <div className="grid grid-cols-2 gap-4">
            <p>Model: {ship.model}</p>
            <p>Manufacturer: {ship.manufacturer}</p>
            <p>Cost in credits: {ship.cost_in_credits}</p>
            <p>Length: {ship.length}</p>
            <p>Atmospheric Speed: {ship.max_atmosphering_speed}</p>
            <p>Crew: {ship.crew}</p>
          </div>
      </div>
    </div>
    {ship.pilots && 
      <div className="flex flex-col mb-6">
        <h2 className="text-center  text-slate-300">PILOTS</h2>
        <div className=" flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row justify-center xl:gap-6 xl:p-6">
          {ship.pilots.length > 0 
            ? ship.pilots.map((item, index) =>(
              <Pilots  
                key={index}
                urlPilot={item}
              />
            ) ) 
            : <p className="text-orange-600 ">There´s no pilots </p> 
            }
        </div>
      </div>}
    {ship.films &&
      <div className="flex flex-col ">
        <h2 className="text-slate-300 text-center">FILMS</h2>
        <div className="flex flex-col sm:grid sm:grid-cols-2  lg:flex lg:flex-row justify-center gap-6 p-6">
          {ship.films.map((item,index) => (
                <Films
                  key={index}
                  urlFilm={item}
                />)
              )}
        </div>
      </div>}
    </>
  );
}

export default StarshipDetail;