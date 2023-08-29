import { useSelector } from "react-redux";
import { AppReduxStateType } from "../../types";
import { increment, decrement } from "../../store/actions/counterActions";
import { useAppDispatch } from "../../store/hooks";

type LoaderProps = {
  message?: string;
};

const Loader = ({ message }: LoaderProps) => {
  const { appInitState } = useSelector((state: AppReduxStateType) => {
    return {
      appInitState: state.counter,
    };
  });
  const dispatch = useAppDispatch();

  return (
    <div>
      <div data-testid="loader-message">{message}</div>
      <div data-testid="app-state">{appInitState}</div>
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
    </div>
  );
};

export default Loader;
