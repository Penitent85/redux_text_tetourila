import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  decrementAction5,
  incByValueAction,
  incrementAction,
  incrementAction5,
  resetAction,
} from "../redux/actions/counterActions";
 import { useState } from "react";
import { decrement, increment, increment5,decrement5, reset , incrementByValue } from "../redux/counterSlice";


const Counter = () => {
  const [val, setVal] = useState(0);
  const { counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    // dispatch(incrementAction() );
    // incrementAction(dispatch);
    dispatch(increment())

  };
  const handleDecrement = () => {
    // decrementAction(dispatch);
    dispatch(decrement())
  };
  const handleReset = () => {
    // resetAction(dispatch);
    dispatch(reset())
  };

  const handleIncrement5 = () => {
    // incrementAction5(dispatch);
    dispatch(increment5())
  };
  const handleDecrement5 = () => {
    // decrementAction5(dispatch);
    dispatch(decrement5())
  };

  const handleChange = (e) => {
    setVal(parseInt(e.target.value));
  };
  const handleIncByValue = () => {
    // dispatch({
    //   type: INC_BY_VALUE,
    //   payload: val,
    // });
    // incByValueAction(val,dispatch)
    dispatch(incrementByValue(val));



  };

  return (
    <div className="flex">
      <p>{counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleIncrement5}>Increment5</button>
      <button onClick={handleDecrement5}>Decrement5</button>
      <input type="number" placeholder="Enter value" onChange={handleChange} />
      <button onClick={handleIncByValue}>INC BY VALUE</button>
    </div>
  );
};

export default Counter;
