import type { CounterActionType } from "../reducers/counterReducer";

export const increment = () => {
  return (dispatch: (arg: CounterActionType) => void) => {
    dispatch({
      type: "INCREMENT",
    });
  };
};

export const decrement = () => {
  return (dispatch: (arg: CounterActionType) => void) => {
    dispatch({
      type: "DECREMENT",
    });
  };
};

export default {};
