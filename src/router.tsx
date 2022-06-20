import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/main";

import { Homepage, Recipes, PageNotFound } from "./pages";

export const ROUTES = {
  HOME: "/",
  RECIPES: "/recipes",
  PAGEDRECIPES: "/recipes/:pageNumber",
};

export const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="*" element={<PageNotFound />} />
        <Route path={ROUTES.HOME} element={<Homepage />} />
        <Route path={ROUTES.RECIPES} element={<Recipes />} />
        <Route path={ROUTES.PAGEDRECIPES} element={<Recipes />} />
      </Route>
    </Routes>
  );
};
