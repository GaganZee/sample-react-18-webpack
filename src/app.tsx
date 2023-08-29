import { AppReduxStateType } from "./types";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { increment, decrement } from "./store/actions/counterActions";
import Loader from "./components/loader";

function App() {
  const counter = useAppSelector((state: AppReduxStateType) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div data-testid="app-container">
      <div>Counter: </div>
      <h1 data-testid="counter-value">{counter}</h1>
      <button
        onClick={() => {
          dispatch<any>(increment());
        }}
      >
        Increase Counter
      </button>
      <button
        onClick={() => {
          dispatch<any>(decrement());
        }}
      >
        Decrease Counter
      </button>
      <br /><br /><br />
      <Loader/>
    </div>
  );
}

export default App;
