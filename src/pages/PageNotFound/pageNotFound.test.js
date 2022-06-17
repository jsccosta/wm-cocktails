import { render, screen } from "@testing-library/react";

import PageNotFound from "./index";

it("shows page not found message", () => {
  render(<PageNotFound />);
  expect(screen.getByText("Page not found!")).toBeInTheDocument();
});
