import { useState } from "react";
import { Outlet, useOutlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Navbar } from "../components";

type MainLayoutProps = {
  children?: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const outlet = useOutlet();
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="h-full bg-pampas" data-testid="main">
      <Navbar />

      <button
        data-testid="layout-darkModeButton"
        aria-label={`Toggle dark mode ${darkMode ? "off" : "on"}`}
        title="Toggle dark mode"
        type="button"
        onClick={() => {
          setDarkMode(!darkMode);
          console.log("dark");
        }}
      >
        {darkMode ? (
          <FontAwesomeIcon icon={faSun} color="#FFA500" />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </button>
      <div className="px-8 py-6 sm:px-4">
        <div className="container mx-auto">
          {outlet ? <Outlet /> : children}
        </div>
      </div>
    </div>
  );
};
