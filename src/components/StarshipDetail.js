import React from "react";

const StarshipDetail = () => {
  return (
    <div className="card w-96 mt-10 bg-black shadow-xl mx-auto  grid md:w-5/6 lg:w-4/6 xl:w-3/6">
      <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body border-t-2 border-red-500 text-slate-300">
          <h2 className="card-title uppercase">name</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique iusto perferendis neque nemo, recusandae velit minus. Sint molestias assumenda dolores, fuga veritatis odio optio obcaecati repellat. Odio aperiam illo ipsum?
          </p>
          <div className="grid grid-cols-2 gap-4">
            <p>Model:</p>
            <p>Manufacturer:</p>
            <p>Cost in credits:</p>
            <p>Length:</p>
            <p>Atmospheric Speed:</p>
            <p>Crew:</p>
          </div>
          
      </div>
    </div>
  );
}

export default StarshipDetail;