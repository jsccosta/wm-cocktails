import { useState, useEffect } from "react";
import { Outlet, useOutlet } from "react-router-dom";
import { Navbar, DarkModeButton } from "../components";
import { storeBrowserPreferenceInStorage, getDarkModeSetting } from "../utils";

type MainLayoutProps = {
  children?: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const outlet = useOutlet();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const browserMode = getDarkModeSetting();
    setDarkMode(browserMode);
  }, []);

  const onClickHandler = () => {
    setDarkMode(!darkMode);
    storeBrowserPreferenceInStorage(!darkMode);
  };

  return (
    <div
      className={`${darkMode && "dark"} h-full ${
        darkMode ? "bg-gray-900" : "bg-pampas "
      }`}
      data-testid="main"
    >
      <Navbar />
      <DarkModeButton
        darkModeState={darkMode}
        onClickHandler={onClickHandler}
      />
      <div className="px-8 py-6 sm:px-4">
        <div className="container mx-auto">
          {outlet ? <Outlet /> : children}
        </div>
      </div>
    </div>
  );
};
