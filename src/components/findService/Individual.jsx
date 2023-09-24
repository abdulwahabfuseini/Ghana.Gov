import React from "react";

import { Link } from "react-router-dom";
import { IndiBus } from "../../assets/Directory";

const Individual = () => {
  return (
    <div className="grid sm:grid-cols-3">
     {IndiBus.slice(16, 28).map((individual) => (
        <div
          key={individual.id}
          className="grid sm:px-8 px-5 py-8  lg:px-8 border cursor-pointer hover:shadow-lg relative before:contents() before:h-full before:w-0 before:top-0 before:left-0 before:bg-yellow-400 before:absolute hover:before:w-1.5"
        >
          <Link to={`/category/${individual.title}`}> <h2 className="text-lg font-semibold capitalize sm:text-lg">
            {individual.title}
          </h2>
          <h4 className="text-base sm:text-lg lg:w-72">{individual.desc}</h4></Link>
        </div>
      ))}
    </div>
  );
};

export default Individual;
