import { NavLink } from "react-router-dom";
import { ROUTES } from "../../router";
import { ErrorMessage } from "./404Message";

const PageNotFound = () => {
  return (
    <div className="space-y-3 rounded border border-gray-200 bg-white/25 p-5 dark:bg-gray-900">
      <div className="notFound flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat">
        <p className="px-2 pb-3 text-4xl">{ErrorMessage}</p>
        <div className="flex h-2 flex-col px-2 text-3xl">
          <p>Shall we return </p>
          <NavLink
            className=" mt-3 flex justify-center rounded bg-pampas py-2 px-4 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            data-testid="navbar-link--home"
            to={ROUTES.HOME}
          >
            Home?
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
