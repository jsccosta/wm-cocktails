import { render, screen, fireEvent } from "@testing-library/react";

import { matchMediaMock } from "../utils/mocks";
import App from "../app";

window.matchMedia = matchMediaMock;

test("clicking on dark mode button toggles background color", async () => {
  render(<App />);
  const darkModeToggleButton = screen.getByTestId("layout-darkModeButton");
  const applicationBackground = screen.getByTestId("main");

  expect(applicationBackground).toHaveClass("bg-pampas");
  expect(darkModeToggleButton).toBeInTheDocument();

  await fireEvent.click(darkModeToggleButton);
  expect(applicationBackground).toHaveClass("bg-gray-900");
});
