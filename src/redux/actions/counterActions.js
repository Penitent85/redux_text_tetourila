import {
  DECREMENT,
  DECREMENT5,
  INC_BY_VALUE,
  INCREMENT,
  INCREMENT5,
  RESET,
} from "./types";

export const incrementAction = async (dispatch) => {
  // return {
  //   type: INCREMENT
  // };
  return dispatch({
    type: INCREMENT,
  });
};

export const decrementAction = async (dispatch) => {
  return dispatch({
    type: DECREMENT,
  });
};

export const resetAction = async(dispatch) => {
  return dispatch({
    type: RESET,
  });
};

export const incrementAction5 =async (dispatch) => {
  return dispatch({
    type: INCREMENT5,
  });
};

export const decrementAction5 = async (dispatch) => {
  return dispatch({
    type: DECREMENT5,
  });
};

export const incByValueAction = async (payload , dispatch) => {
  // return {
  //   type: INC_BY_VALUE,
  // };
  return dispatch({
    type: INC_BY_VALUE,
    payload
  });
};
