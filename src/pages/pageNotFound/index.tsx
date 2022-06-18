import { Link, NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import { ROUTES } from "../../router";

const PageNotFound = () => {
  return (
    <div className="space-y-3 rounded border border-gray-200 bg-white/25 p-5 dark:bg-gray-900 dark:text-white">
      <div className="notFound">
        <h1>
          <strong>Oh no! The page you were looking for was not found</strong>.
        </h1>
        <p>
          👷🏻‍♂️ Shall we return{" "}
          <NavLink data-testid="navbar-link--home" to={ROUTES.HOME}>
            Home?
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
