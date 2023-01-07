import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


const Pilots = ({urlPilot}) => {
  const [pilotData, setPilotData] = useState({});
  const idPilot=(urlPilot).replace(/[^0-9]+/g, "")
  const imgPilot = `https://starwars-visualguide.com/assets/img/characters/${idPilot}.jpg` ;
  const imgError = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";

  const getPilots = () => {
    axios
      .get(urlPilot)
      .then(res => {
        setPilotData({
          pilotData,
          name:res.data.name,
          height:res.data.height,
          gender:res.data.gender
        })
      })
  }
  useEffect(() => {
    getPilots();
    console.log("urlPilotos =>", urlPilot)
    console.log(pilotData)
    console.log(idPilot)
  }, [])
  
return (
  <div className="card flex my-10 w-5/6 lg:w-60  bg-black  shadow-xl mx-auto ">
      <figure><img 
          src= {imgPilot}
          alt="pilot" className="w-full object-cover"
          onError={(e) => (e.currentTarget.src = imgError)}/></figure>
        <div className="card-body ">
          <h2 className="card-title uppercase"> {pilotData.name}</h2>
          <div className="grid grid-cols gap-2">
            <p>Height: {pilotData.height}</p>
            <p>Gender: {pilotData.gender}</p>
          </div>
        </div>
  </div>
  
  
)
}


export default Pilots;