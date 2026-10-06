import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement_type,
  increment_type,
  reset_type,
} from "./redux/actions/actions";

const App = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.count);

  const handleIncrement = () => {
    dispatch(increment_type());
  };
  const handleDecrement = () => {
    dispatch(decrement_type());
  };
  const handleReset = () => {
    dispatch(reset_type());
  };
  return (
    <div>
      <h1>Counter : {count} </h1>
      <div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleReset}>reset</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
};

export default App;
