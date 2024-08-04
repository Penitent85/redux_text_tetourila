// to hold all reducers

import { combineReducers } from "redux";
import counterReducers from "./counterReducers";
import userReducer from "./userReducer";

export default combineReducers({
    counter: counterReducers,
    user: userReducer,
    // add more reducers here as needed
  });
