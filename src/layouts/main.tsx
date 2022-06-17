import { useState, useEffect } from "react";
import { Outlet, useOutlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Navbar } from "../components";

type MainLayoutProps = {
  children?: React.ReactNode;
};

const getDarkModeSetting = (): boolean => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedMode = window.localStorage.getItem("isDarkModeSet");
    let parsedStoreValue = false;

    if (storedMode) {
      parsedStoreValue = JSON.parse(storedMode);
    }

    const browserSettings = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (parsedStoreValue || browserSettings) {
      return true;
    }
  }
  return false;
};

const storeBrowserPreferenceInStorage = (darkMode: boolean) => {
  window.localStorage.setItem("isDarkModeSet", JSON.stringify(darkMode));
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const outlet = useOutlet();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const browserMode = getDarkModeSetting();
    setDarkMode(browserMode);
  }, []);

  return (
    <div
      className={`${darkMode && "dark"} h-full ${
        darkMode ? "bg-gray-900" : "bg-pampas "
      }`}
      data-testid="main"
    >
      <Navbar />
      <div className="container mx-auto flex justify-end">
        <button
          data-testid="layout-darkModeButton"
          aria-label={`Toggle dark mode ${darkMode ? "off" : "on"}`}
          title="Toggle dark mode"
          type="button"
          onClick={() => {
            setDarkMode(!darkMode);
            storeBrowserPreferenceInStorage(!darkMode);
          }}
        >
          {darkMode ? (
            <FontAwesomeIcon icon={faSun} color="#FFA500" />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </button>
      </div>
      <div className="px-8 py-6 sm:px-4">
        <div className="container mx-auto">
          {outlet ? <Outlet /> : children}
        </div>
      </div>
    </div>
  );
};
