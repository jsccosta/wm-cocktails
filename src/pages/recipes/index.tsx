import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import { Recipe } from "types";
import { Card } from "components/card";

const Recipes = () => {
  const { pageNumber } = useParams();
  const [allDrinks, setAllDrinks] = useState<Recipe[]>([]);
  const [numberOfPages, setNumberOfPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(Number(pageNumber));

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

  console.log(`total pages: ${numberOfPages}`);

  // const onNavigationClick = (page: number) => {

  //   setCurrentPage(page)

  // }

  const baseLinkStyle =
    "page-link relative block py-1.5 px-3 rounded border-0 outline-none transition-all duration-300 rounded ";
  const selectedStyle =
    "bg-blue-600 text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md";
  const deselectedStyle =
    "bg-transparent text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none";

  return (
    <>
      <div>
        {allDrinks.length > 0 &&
          allDrinks.map((drink) => <Card recipe={drink} key={nanoid()} />)}
      </div>

      <div className="flex justify-center">
        <nav aria-label="Page navigation example">
          <ul className="list-style-none flex">
            <li className="page-item disabled">
              <a
                className="page-link pointer-events-none relative block rounded rounded border-0 bg-transparent py-1.5 px-3 text-gray-500 outline-none transition-all duration-300 focus:shadow-none"
                // href={`http://localhost:3000/recipes/${pageNumber - 1}`}
                // tabIndex="-1"
                // aria-disabled="true"
              >
                Previous
              </a>
            </li>

            {[...Array(9)].map((_, idx) => (
              <li
                className={`page-item ${
                  idx + 1 === Number(pageNumber) && "active"
                } `}
                // onKeyDown={() => onNavigationClick(idx + 1)}
              >
                <button
                  type="button"
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`${baseLinkStyle} ${
                    idx + 1 === Number(pageNumber)
                      ? selectedStyle
                      : deselectedStyle
                  }`}
                >
                  {idx + 1}
                </button>
                {/* <a
                  // href={`http://localhost:3000/recipes/${idx + 1}`}
                >
                </a> */}
              </li>
            ))}

            <li className="page-item">
              <a
                className="page-link relative block rounded rounded border-0 bg-transparent py-1.5 px-3 text-gray-800 outline-none transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 focus:shadow-none"
                // href={`http://localhost:3000/recipes/${pageNumber + 1}`}
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
