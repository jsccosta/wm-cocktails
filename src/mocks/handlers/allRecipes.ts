import { rest } from "msw";

import cocktails from "../data/cocktails.json";

export const allRecipes = rest.get(
  "/api/recipes/:pageNumber",
  (req, res, { json }) => {
    const params = {
      limit: (req.url.searchParams.get("limit") as string) || "10",
      offset: (req.url.searchParams.get("offset") as string) || "0",
    };

    const { pageNumber } = req.params;
    console.log(`pageNumber: ${pageNumber}`);

    const limit = parseInt(params.limit, 10);
    const offset = parseInt(params.offset, 10);

    const sliceStart = (Number(pageNumber) - 1) * 8;
    const sliceEnd = Number(pageNumber) * 8;

    return res(
      json({
        params: req,
        limit,
        offset,
        total: cocktails.length,
        data: cocktails.slice(sliceStart, sliceEnd),
        // data: cocktails.slice(offset, offset + limit),
      })
    );
  }
);
