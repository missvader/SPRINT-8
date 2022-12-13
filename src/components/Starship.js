import React from "react";

const Starship = ({name, model}) => {
  return(
    <ul className="text-slate-300 mt-7 bg-zinc-800/75 rounded p-4">
      <li className="uppercase">{name}</li>
      <li className="mt-1">{model}</li>
    </ul>
  )
}
export default Starship;