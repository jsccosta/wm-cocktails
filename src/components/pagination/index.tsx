import { Link } from "react-router-dom";
import { PaginationAnchor } from "../paginationAnchor";

const baseLinkStyle =
  "page-link relative block py-1.5 px-3 rounded border-0 outline-none transition-all duration-300 rounded ";
const selectedStyle =
  "bg-blue-600 text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md";
const deselectedStyle =
  "bg-transparent text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none";

export const Pagination = ({
  currentPageView,
  numberOfPages,
  resultsPerPage,
  totalDrinks,
}: {
  currentPageView: number;
  numberOfPages: number;
  resultsPerPage: number;
  totalDrinks: number;
}) => {
  const isFirstPage = currentPageView === 1;
  const isLastPage = currentPageView === numberOfPages;
  const startOfDrinksOffset = (currentPageView - 1) * resultsPerPage + 1;
  const endOfDrinksOffset = currentPageView * resultsPerPage;

  return (
    <div className="flex justify-center" data-test-id="pagination-component">
      <nav aria-label="Drinks list navigation">
        <ul className="flex text-sm">
          <PaginationAnchor
            isEnabled={isFirstPage}
            pageLink={`/recipes/${currentPageView - 1}`}
            directionLabel="Previous"
          />
          <div className=" flex items-center sm:hidden">
            Drinks {startOfDrinksOffset} to {endOfDrinksOffset} of {totalDrinks}
          </div>
          <div className="hidden sm:flex">
            {[...Array(numberOfPages)].map((_, idx) => (
              <li className={`${idx + 1 === currentPageView && "active"} `}>
                <Link
                  data-test-id="pagination-button"
                  to={`/recipes/${idx + 1}`}
                  className={`${baseLinkStyle} ${
                    idx + 1 === currentPageView
                      ? selectedStyle
                      : deselectedStyle
                  }`}
                >
                  {idx + 1}
                </Link>
              </li>
            ))}
          </div>
          <PaginationAnchor
            isEnabled={isLastPage}
            pageLink={`/recipes/${currentPageView + 1}`}
            directionLabel="Next"
          />
        </ul>
      </nav>
    </div>
  );
};
