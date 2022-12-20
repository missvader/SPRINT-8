import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ShipsContext } from "../context/ShipsContext";


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
    <div className="card w-96 my-10 bg-black shadow-xl mx-auto  grid md:w-5/6 lg:w-4/6 xl:w-3/6">
      <figure><img 
          src= {imgVisualGuide}
          alt="starship" className="w-full"
          onError={(e) => (e.currentTarget.src = imgError)}/></figure>
        <div className="card-body border-t-2 border-red-500 text-slate-300">
          <h2 className="card-title uppercase">{ship.name}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique iusto perferendis neque nemo, recusandae velit minus. Sint molestias assumenda dolores, fuga veritatis odio optio obcaecati repellat. Odio aperiam illo ipsum?
          </p>
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
  );
}

export default StarshipDetail;