import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Recipe } from "types";
import { Card } from "components/card";
import { Pagination } from "components/pagination";
import { getRandomID } from "utils";

const RESULTS_PER_PAGE = 8;

const Recipes = () => {
  const { pageNumber } = useParams();

  const currentPageView = pageNumber ? Number(pageNumber) : 1;

  const [drinksInPage, setDrinksInPage] = useState<Recipe[]>([]);
  const [numberOfPages, setNumberOfPages] = useState<number>(0);
  const [totalDrinks, setTotalDrinks] = useState<number>(0);

  useEffect(() => {
    const getDrinks = async () => {
      const { data, total } = await fetch(
        `http://localhost:3000/api/recipes/all/${pageNumber ?? 1}`
      ).then((res) => res.json());

      setNumberOfPages(Math.ceil(total / RESULTS_PER_PAGE));
      setDrinksInPage(data);
      setTotalDrinks(total);
    };
    getDrinks();
  }, [pageNumber]);

  return (
    <main>
      {drinksInPage.length > 0 && (
        <>
          <div className="mb-4 space-y-3 rounded border border-gray-200 bg-white/25 p-5 text-sm dark:bg-gray-900 dark:text-white">
            {drinksInPage.map((drink) => (
              <Card recipe={drink} key={getRandomID()} />
            ))}
          </div>

          <Pagination
            currentPageView={currentPageView}
            numberOfPages={numberOfPages}
            resultsPerPage={RESULTS_PER_PAGE}
            totalDrinks={totalDrinks}
          />
        </>
      )}
    </main>
  );
};

export default Recipes;
