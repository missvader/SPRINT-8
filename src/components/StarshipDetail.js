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
    <div className="card w-96 my-10 bg-black  shadow-xl mx-auto  grid w-2/3 sm:w-5/6 lg:w-4/6 xl:w-3/6  ">
      <figure><img 
          src= {imgVisualGuide}
          alt="starship" className="w-full"
          onError={(e) => (e.currentTarget.src = imgError)}/></figure>
        <div className="card-body border-t-2 border-red-500 text-slate-300">
          <h2 className="card-title uppercase">{ship.name}</h2>
          <div className="grid grid-cols-2 gap-4">
            <p>Model: {ship.model}</p>
            <p>Manufacturer: {ship.manufacturer}</p>
            <p>Cost in credits: {ship.cost_in_credits}</p>
            <p>Length: {ship.length}</p>
            <p>Atmospheric Speed: {ship.max_atmosphering_speed}</p>
            <p>Crew: {ship.crew}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 ">
            <div className="mt-3">
              <h3>PILOTS:</h3>
              {ship.pilots.map((item, index) => (
                <Pilots  
                  key={index}
                  urlPilot={item}
                /> )
              )}
            </div>
            <div className="mt-3">
              <h3>FILMS:</h3>
              {ship.films.map((item,index) => (
                <Films
                  key={index}
                  urlFilm={item}
                />)
              )}
            </div>
            
          </div>
          
      </div>
    </div>
  );
}

export default StarshipDetail;