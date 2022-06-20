import { lazy } from "react";

export const Homepage = lazy(() => import("./homepage"));
export const Recipes = lazy(() => import("./recipes"));
export const PageNotFound = lazy(() => import("./pageNotFound"));
