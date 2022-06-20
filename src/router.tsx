import { Routes, Route, useParams, Navigate } from "react-router-dom";
import { MainLayout } from "./layouts/main";

import { Homepage, Recipes, PageNotFound } from "./pages";

export const ROUTES = {
  HOME: "/",
  RECIPES: "/recipes",
  PAGED_RECIPES: "/recipes/:pageNumber",
  PAGE_NOT_FOUND: "/notFound",
};

const PrivateRoute = ({ children }: { children: React.ReactElement }) => {
  const { pageNumber } = useParams();
  const parsedPageNumber = Number(pageNumber);
  return typeof parsedPageNumber === "number" && !isNaN(parsedPageNumber) ? (
    children
  ) : (
    <Navigate to="/notFound" />
  );
};

export const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<Homepage />} />
        <Route path={ROUTES.RECIPES} element={<Recipes />} />
        <Route
          path={ROUTES.PAGED_RECIPES}
          element={
            <PrivateRoute>
              <Recipes />
            </PrivateRoute>
          }
        />
        <Route path={ROUTES.PAGE_NOT_FOUND} element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
