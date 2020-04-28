import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Header component", () => {
  const { getByText } = render(<App />);
  const Header = getByText(/Header/i);
  expect(Header).toBeInTheDocument();
});
