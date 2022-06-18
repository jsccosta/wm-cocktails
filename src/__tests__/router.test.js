import { Suspense } from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Router } from "../router";

window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: MemoryRouter }),
  };
};

test("full app rendering/navigating", async () => {
  const { user } = await renderWithRouter(
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  );

  // Check if the homepage api text is visible
  expect(await screen.findByText("/api/recipes/popular")).toBeInTheDocument();

  // Check on the recipes link in the navbar
  await user.click(await screen.findByTestId(/navbar-link--recipes/));

  // Check if the recipes api tekst is visible
  expect(await screen.findByText("/api/recipes/all")).toBeInTheDocument();
});
