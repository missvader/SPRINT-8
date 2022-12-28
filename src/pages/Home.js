import React from "react";
import "../App.css";
import { Link } from "react-router-dom";



const Home = () => {
  
  return (
  <div className="container-fluid bg-container">
    <div className="home-container  ">
      <div className="md:w-1/2 md:flex flex-col md:grid h-full content-center " >
        <div className="flex  flex-col  ">
        <p className="font-mono md:text-center text-white m-5 md:text-xl">
          Throughout the entire Star Wars universe we have been able to enjoy the appearance of different starships.
          MAY THE FORCE BE WITH YOU
        </p>
        <div>
          <Link to="/starships" className="mx-auto link">
            <button className=" btn glass m-5 ">DISCOVER</button>
          </Link>
        </div>
        
        
        </div>
        
      </div>
      
    </div>
  </div>  
    
    
    
     

  )
}
export default Home;