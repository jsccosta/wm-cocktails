import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import PageNotFound from "./index";
import { ErrorMessage } from "./404Message";
import { matchMediaMock } from "../../utils/mocks";
import { Router } from "../../router";

window.matchMedia = matchMediaMock;

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
