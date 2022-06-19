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

const PaginationAnchor = ({
  isEnabled,
  pageLink,
  directionLabel,
}: {
  isEnabled: boolean;
  pageLink: string;
  directionLabel: string;
}) => {
  return (
    <li className="page-item">
      <a
        className={`${commonArrowStyle} ${
          isEnabled ? disabledArrowStyle : enabledArrowStyle
        }`}
        href={pageLink}
        tabIndex={isEnabled ? -1 : 0}
        aria-disabled={isEnabled && true}
      >
        {directionLabel}
      </a>
    </li>
  );
};

export const Pagination = ({
  currentPageView,
  numberOfPages,
  resultsPerPage,
}: {
  currentPageView: number;
  numberOfPages: number;
  resultsPerPage: number;
}) => {
  const isFirstPage = currentPageView === 1;
  const isLastPage = currentPageView + 1 === numberOfPages;

  return (
    <div className="flex justify-center">
      <nav aria-label="Drinks list navigation">
        <ul className="list-style-none flex text-sm">
          <PaginationAnchor
            isEnabled={isFirstPage}
            pageLink={`http://localhost:3000/recipes/${currentPageView - 1}`}
            directionLabel="Previous"
          />
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

          <PaginationAnchor
            isEnabled={isLastPage}
            pageLink={`http://localhost:3000/recipes/${currentPageView + 1}`}
            directionLabel="Next"
          />
        </ul>
      </nav>
    </div>
  );
};
