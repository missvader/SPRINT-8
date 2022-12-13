import React from "react";

const Menu = () =>{
  return (
    <div className="flex justify-center tabs border-zinc-600 border">
      <div className="border-zinc-600 border"><a className="text-white tab tab-bordered  border-primary tab-active" >HOME</a></div>  
      <div className="border-zinc-600 border"><a className="text-white tab tab-bordered border-primary">STARSHIPS</a></div>
    </div>
  )
}
export default Menu;