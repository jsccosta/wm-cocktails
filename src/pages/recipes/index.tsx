import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import { Recipe } from "types";
import { Card } from "components/card";

const Recipes = () => {
  const { pageNumber } = useParams();

  const currentPageView = pageNumber ? Number(pageNumber) : 1;

  const [allDrinks, setAllDrinks] = useState<Recipe[]>([]);
  const [numberOfPages, setNumberOfPages] = useState<number>(0);

  useEffect(() => {
    const getDrinks = async () => {
      const { data, total } = await fetch(
        `http://localhost:3000/api/recipes/all/${pageNumber ?? 1}`
      ).then((res) => res.json());

      // ToDo set number of results per page as a global parameter
      setNumberOfPages(Math.ceil(total / 8));
      setAllDrinks(data);
    };

    if (allDrinks.length === 0) {
      getDrinks();
    }
  }, [allDrinks, pageNumber]);

  const baseLinkStyle =
    "page-link relative block py-1.5 px-3 rounded border-0 outline-none transition-all duration-300 rounded ";
  const selectedStyle =
    "bg-blue-600 text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md";
  const deselectedStyle =
    "bg-transparent text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none";

  const commonArrowStyle =
    "page-link relative block rounded rounded border-0 bg-transparent py-1.5 px-3 outline-none transition-all duration-300 focus:shadow-none";
  const enabledArrowStyle =
    "text-gray-800 hover:bg-gray-200 hover:text-gray-800";
  const disabledArrowStyle = "pointer-events-none text-gray-500";

  return (
    <>
      <div>
        {allDrinks.length > 0 &&
          allDrinks.map((drink) => <Card recipe={drink} key={nanoid()} />)}
      </div>

      <div className="flex justify-center">
        <nav aria-label="Page navigation example">
          <ul className="list-style-none flex">
            <li className={`page-item `}>
              <a
                className={`${commonArrowStyle} ${
                  currentPageView === 1 ? disabledArrowStyle : enabledArrowStyle
                }`}
                href={`http://localhost:3000/recipes/${currentPageView - 1}`}
                tabIndex={currentPageView === 1 ? -1 : 0}
                aria-disabled={currentPageView === 1 && "true"}
              >
                Previous
              </a>
            </li>

            {[...Array(9)].map((_, idx) => (
              <li
                className={`page-item ${
                  idx + 1 === Number(pageNumber) && "active"
                } `}
              >
                <a
                  className={`${baseLinkStyle} ${
                    idx + 1 === Number(pageNumber)
                      ? selectedStyle
                      : deselectedStyle
                  }`}
                  href={`http://localhost:3000/recipes/${idx + 1}`}
                >
                  {idx + 1}
                </a>
              </li>
            ))}

            <li
              className={`page-item ${
                currentPageView + 1 === numberOfPages && "disabled"
              }`}
            >
              <a
                className={`${commonArrowStyle} ${
                  currentPageView === numberOfPages
                    ? disabledArrowStyle
                    : enabledArrowStyle
                }`}
                href={`http://localhost:3000/recipes/${currentPageView + 1}`}
                tabIndex={currentPageView + 1 === numberOfPages ? -1 : 0}
                aria-disabled={currentPageView + 1 === numberOfPages && "true"}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Recipes;
