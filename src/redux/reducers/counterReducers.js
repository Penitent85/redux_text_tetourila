import {
  INCREMENT,
  DECREMENT,
  RESET,
  INCREMENT5,
  DECREMENT5,
  INC_BY_VALUE,
} from "../actions/types";

const counterReducers = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1, 
      };

    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case RESET:
      return {
        ...state,
        counter: 0,
      };
    case INCREMENT5:
      return {
        ...state,
        counter: state.counter + 5,
      };
    case DECREMENT5:
      return {
        ...state,
        counter: state.counter - 5,
      };
    case INC_BY_VALUE:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    default:
      return state;
  }
};

export default counterReducers;
