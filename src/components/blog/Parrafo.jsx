import React from "react";

const Parrafo = ({parrafo1, parrafo2}) => {
  return (
    <div className="lg:text-xl md:text-xl sm:text-base mt-5 dark:text-white leading-relaxed">
      {parrafo1}
      {parrafo2 && <br />}
      {parrafo2}
    </div>
  );
};

export default Parrafo;
