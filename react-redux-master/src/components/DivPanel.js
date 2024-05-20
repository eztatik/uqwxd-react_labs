import React from "react";
import { useSelector } from "react-redux";

const DivPanel = () => {
  let counterVal = useSelector((state) => state.counter);
  let counterValTwo = useSelector((state) => state.secondCounter);
  return (
    <div>
      The present value of counter is {counterVal} <br></br>The present value of
      counter is {counterValTwo}
    </div>
  );
};

export default DivPanel;
