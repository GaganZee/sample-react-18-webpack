/* eslint-disable react/jsx-props-no-spreading */
import { render } from "@testing-library/react";

export const RenderWithThemeComponent = (C, props) => {
  return <C {...props} />;
};

const renderWithTheme = (C, props = {}) => {
  return render(RenderWithThemeComponent(C, props));
};

export default renderWithTheme;
