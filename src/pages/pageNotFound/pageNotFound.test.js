import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import PageNotFound from "./index";
import { ErrorMessage } from "./404Message";
import { Router } from "../../router";

window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});

it("shows page not found message", () => {
  render(
    <BrowserRouter>
      <PageNotFound />
    </BrowserRouter>
  );
  expect(screen.getByText(ErrorMessage)).toBeInTheDocument();
});

it("shows goes to 404 page on a bad path", async () => {
  render(
    <MemoryRouter initialEntries={["/some/bad/path"]}>
      <Router />
    </MemoryRouter>
  );

  await waitFor(() =>
    expect(screen.getByText(ErrorMessage)).toBeInTheDocument()
  );
});
