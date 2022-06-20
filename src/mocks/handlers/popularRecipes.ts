import { rest } from "msw";

import cocktails from "../data/cocktails.json";

const topFiveCockTails = cocktails.slice(0, 5);

export const popularRecipes = rest.get(
  "/api/recipes/popular",
  (req, res, { json }) => {
    return res(
      json({
        cocktails: topFiveCockTails,
      })
    );
  }
);
