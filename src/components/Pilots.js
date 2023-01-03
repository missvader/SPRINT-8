import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


const Pilots = ({urlPilot}) => {
  const [pilotData, setPilotData] = useState({});
  const getPilots = () => {
    axios
      .get(urlPilot)
      .then(res => {
        setPilotData({
          pilotData,
          name:res.data.name
        })
      })
  }
  useEffect(() => {
    getPilots();
    console.log("urlPilotos =>", urlPilot)
    console.log(pilotData)
  }, [])
  
return (

  <div className="ml-3" >
          <p  className="">{pilotData.name}</p>
         
  </div>
)
}


export default Pilots;