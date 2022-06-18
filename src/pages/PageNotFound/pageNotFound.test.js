import { Routes, Route, BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import MainLayout from "../../layouts/main";
import PageNotFound from "./index";

it("shows page not found message", () => {
  render(<PageNotFound />);
  expect(screen.getByText("Page not found!")).toBeInTheDocument();
});

it("navigating to an invalid page shows error message", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={"/invalid/path"} element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

  expect(screen.getByText("Page not found!")).toBeInTheDocument();
});
