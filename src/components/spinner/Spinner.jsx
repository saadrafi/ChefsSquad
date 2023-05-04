import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const Spinner = () => {
  return (
    <div className=" h-screen flex justify-center items-center">
      <ScaleLoader color="#20e136" height={50} width={10} radius={10} margin={4} />
    </div>
  );
};

export default Spinner;
