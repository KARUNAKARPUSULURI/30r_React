import React from 'react';
import "./App.css";
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './redux/actions/actions';

const App = () => {
  
  const state = useSelector((state) => state.count);
  const name = useSelector((state) => state.name);
  console.log(state)
  const dispatch = useDispatch();

  const handleIncre = () => {
    dispatch(increment()) //{type : "increment"}
  }
  const handleDecre = () => {
    dispatch(decrement()) //{type : "decrement"}
  }
  const handleReset = () => {
    dispatch(reset()) //{type : "reset"}
  }
  
  return (
    <div>
      <h1>Routine - Counter App</h1>
      <div>
        <div>
          <h3>Counter: {state} - {name}</h3>
        </div>
        <div>
          <button onClick={handleDecre}>-</button>
          <button onClick={handleReset}>reset</button>
          <button onClick={handleIncre}>+</button>
        </div>
      </div>
    </div>
  )
}

export default App;
