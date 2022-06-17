import { render, screen } from "@testing-library/react";

import App from "../app";

test("renders lazy component", async () => {
  render(<App />);

  const textToMatch = await screen.findByText(/You can use the api endpoint/);
  expect(textToMatch).toBeInTheDocument();
});

test("displays dark mode button", () => {
  render(<App />);
  expect(screen.getByTestId("layout-darkModeButton")).toBeInTheDocument();
});
