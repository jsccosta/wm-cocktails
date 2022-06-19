const baseLinkStyle =
  "page-link relative block py-1.5 px-3 rounded border-0 outline-none transition-all duration-300 rounded ";
const selectedStyle =
  "bg-blue-600 text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md";
const deselectedStyle =
  "bg-transparent text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none";

const commonArrowStyle =
  "page-link relative block rounded rounded border-0 bg-transparent py-1.5 px-3 outline-none transition-all duration-300 focus:shadow-none";
const enabledArrowStyle = "text-gray-800 hover:bg-gray-200 hover:text-gray-800";
const disabledArrowStyle = "pointer-events-none text-gray-500";

export const Pagination = ({
  currentPageView,
  numberOfPages,
  resultsPerPage,
}: {
  currentPageView: number;
  numberOfPages: number;
  resultsPerPage: number;
}) => {
  return (
    <div className="flex justify-center">
      <nav aria-label="Drinks list navigation">
        <ul className="list-style-none flex text-sm">
          <li className="page-item">
            <a
              className={`${commonArrowStyle} ${
                currentPageView === 1 ? disabledArrowStyle : enabledArrowStyle
              }`}
              href={`http://localhost:3000/recipes/${currentPageView - 1}`}
              tabIndex={currentPageView === 1 ? -1 : 0}
              aria-disabled={currentPageView === 1 && true}
            >
              Previous
            </a>
          </li>
          <div className="page-item flex items-center sm:hidden">
            Showing drinks {currentPageView} to 4 of {numberOfPages}
          </div>
          <div className="hidden sm:flex">
            {[...Array(numberOfPages)].map((_, idx) => (
              <li
                className={`page-item ${
                  idx + 1 === currentPageView && "active"
                } `}
              >
                <a
                  className={`${baseLinkStyle} ${
                    idx + 1 === currentPageView
                      ? selectedStyle
                      : deselectedStyle
                  }`}
                  href={`http://localhost:3000/recipes/${idx + 1}`}
                >
                  {idx + 1}
                </a>
              </li>
            ))}
          </div>
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
              aria-disabled={currentPageView + 1 === numberOfPages && true}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
