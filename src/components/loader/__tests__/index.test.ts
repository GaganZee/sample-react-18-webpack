import { test } from "@jest/globals";
import { screen } from "@testing-library/react";

import Loader from "..";
import renderWithConfig from "../../../../tests/utils/renderWithConfig";

test("Basic check", () => {
    expect(2+2).toBe(4);
    expect(2-2).toBe(0);
});

test("Render component", () => {
    renderWithConfig(Loader, { message: "Test message..." }, { counter: 9});
    const loaderMsgEl = screen.getByTestId("loader-message");
    expect(loaderMsgEl).toBeInTheDocument();
    expect(loaderMsgEl).toHaveTextContent("Test message...");
    const appInitMsgEl = screen.getByTestId("app-state");
    expect(appInitMsgEl).toHaveTextContent("9");
});
