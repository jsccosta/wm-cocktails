import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PageNotFound from "./index";

it("shows page not found message", () => {
  render(
    <BrowserRouter>
      <PageNotFound />
    </BrowserRouter>
  );
  expect(
    screen.getByText("Oh no! The page you were looking for was not found.")
  ).toBeInTheDocument();
});
