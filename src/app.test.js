import { test } from "@jest/globals";
import { screen } from "@testing-library/react";
import App from "./app";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

const middlewares = [thunk];

test("Render component", () => {
  const mockStore = configureStore(middlewares);

  render(
    <Provider store={mockStore({ counter: 3 })}>
      <App />
    </Provider>
  );
  const loaderMsgEl = screen.getByTestId("app-container");
  expect(loaderMsgEl).toBeInTheDocument();
  const counterEl = screen.getByTestId("counter-value");
  expect(counterEl.textContent).toContain("3");
});
