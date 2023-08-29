/* eslint-disable react/jsx-props-no-spreading */
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { RenderWithThemeComponent } from "./renderWithTheme";

const middlewares = [thunk];

export const RenderWithConfigComponent = (C, props, initialState) => {
  const mockStore = configureStore(middlewares);
  return (
    <Provider store={mockStore(initialState)}>
      {RenderWithThemeComponent(C, props)}
    </Provider>
  );
};

const renderWithConfig = (C, props, initialState = {}) => {
  return render(RenderWithConfigComponent(C, props, initialState));
};
export default renderWithConfig;
