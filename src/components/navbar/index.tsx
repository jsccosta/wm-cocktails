import { Dispatch, SetStateAction } from "react";
import { Link, NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import { ROUTES } from "../../router";

import { Logo } from "../logo";

const navbarStyles = {
  default:
    "block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-gray-500 md:dark:hover:bg-transparent md:dark:hover:text-white",
  active:
    "block rounded bg-blue-700 py-2 pr-4 pl-3 text-white dark:text-white md:bg-transparent md:p-0 md:text-gray-900 underline dark:md:text-white",
};

export const Navbar = ({
  mobileMenuToggler,
  isMenuOpen,
  isDarkMode,
}: {
  mobileMenuToggler: Dispatch<SetStateAction<boolean>>;
  isMenuOpen: boolean;
  isDarkMode: boolean;
}) => {
  return (
    <nav className="py-6 px-2 dark:bg-gray-900 sm:px-4 md:pt-12">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="mr-6 flex flex-1">
          <Logo />
          <span className="sr-only">Wieni</span>
        </Link>
        <div className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden">
          <Hamburger
            toggled={isMenuOpen}
            size={25}
            toggle={() => mobileMenuToggler(!isMenuOpen)}
            color={isDarkMode ? "#e5e7eb" : "#000"}
            label="Open main menu"
            aria-expanded={isDarkMode ? "true" : "false"}
          />
        </div>
        <div
          className={`${!isMenuOpen && "hidden"} w-full md:block md:w-auto`}
          id="mobile-menu"
        >
          <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            <li>
              <NavLink
                data-testid="navbar-link--home"
                to={ROUTES.HOME}
                className={({ isActive }) =>
                  isActive ? navbarStyles.active : navbarStyles.default
                }
                onClick={() => isMenuOpen && mobileMenuToggler(!isMenuOpen)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                data-testid="navbar-link--recipes"
                to={ROUTES.RECIPES}
                className={({ isActive }) =>
                  isActive ? navbarStyles.active : navbarStyles.default
                }
                onClick={() => isMenuOpen && mobileMenuToggler(!isMenuOpen)}
              >
                Recipes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
