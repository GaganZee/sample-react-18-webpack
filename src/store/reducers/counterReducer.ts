import type { IAction } from "../../types";

export type CounterStateType = number;

const initialState: CounterStateType = 1;

interface IIncrement extends IAction {
  type: "INCREMENT";
}
interface IDecrement extends IAction {
  type: "DECREMENT";
}

export type CounterActionType = IIncrement | IDecrement;

const counter = (state = initialState, action: CounterActionType) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state === 1 ? 1 : state - 1;
    default:
      return state;
  }
};

export default counter;
