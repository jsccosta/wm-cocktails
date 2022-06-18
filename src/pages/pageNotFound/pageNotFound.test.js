import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PageNotFound from "./index";
import { ErrorMessage } from "./404Message";

it("shows page not found message", () => {
  render(
    <BrowserRouter>
      <PageNotFound />
    </BrowserRouter>
  );
  expect(screen.getByText(ErrorMessage)).toBeInTheDocument();
});
