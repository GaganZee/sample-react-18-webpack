import type { CounterStateType } from "../store/reducers/counterReducer";

export type AppReduxStateType = {
    counter: CounterStateType
};

export interface Action<T = any> {
  type: T;
}

export interface IAction extends Action {
  type: string;
}
