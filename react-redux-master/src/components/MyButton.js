import React from "react";
import { useDispatch } from "react-redux";
import increment from "../actions";
import incrementTwo from "../actions";

const MyButton = () => {
  let dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(increment(1))}>Increase counter</button>
  );
};

const MyButtonTwo = () => {
  let dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(incrementTwo(1))}>
      Increase counter 2
    </button>
  );
};

export default (MyButton, MyButtonTwo);
