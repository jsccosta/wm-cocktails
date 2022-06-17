import { render, screen, userEvent, fireEvent } from "@testing-library/react";

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

test("clicking on dark mode button toggles background color", async () => {
  render(<App />);
  const darkModeToggleButton = screen.getByTestId("layout-darkModeButton");
  const applicationBackground = screen.getByTestId("main");

  expect(applicationBackground).toHaveClass("bg-pampas");
  expect(darkModeToggleButton).toBeInTheDocument();

  await fireEvent.click(darkModeToggleButton);
  expect(applicationBackground).toHaveClass("bg-gray-900");
});
