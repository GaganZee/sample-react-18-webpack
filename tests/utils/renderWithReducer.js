import reducers from "../../src/store/reducers";

/* eslint-disable react/jsx-props-no-spreading */
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { RenderWithThemeComponent } from "./renderWithTheme";

const middlewares = [thunk];

const renderWithReducer = (C, props) => {
  // const mockStore = configureStore(middlewares);
  const store = createStore(reducers, {}, applyMiddleware(...middlewares));

  return render(
    <Provider store={store}>{RenderWithThemeComponent(C, props)}</Provider>
  );
};
export default renderWithReducer;
