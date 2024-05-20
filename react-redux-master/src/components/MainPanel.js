import React from "react";
import MyButton from "./MyButton";
import MyButtonTwo from "./MyButton";

import DivPanel from "./DivPanel";

const MainPanel = () => {
  return (
    <div>
      This is main panel <MyButton></MyButton>
      <MyButtonTwo></MyButtonTwo>
      <DivPanel></DivPanel>
    </div>
  );
};
export default MainPanel;
