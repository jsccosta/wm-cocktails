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
  const [mobileMenuStatus, setMobileMenuStatus] = useState(false);

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
      className={`${darkMode && "dark"} min-h-full ${
        darkMode ? "bg-gray-900" : "bg-pampas "
      }`}
      data-testid="main"
    >
      <Navbar
        mobileMenuToggler={setMobileMenuStatus}
        isMenuOpen={mobileMenuStatus}
        isDarkMode={darkMode}
      />
      <div
        className={`${mobileMenuStatus && "hidden"} px-8 py-1  sm:px-4 md:pt-1`}
      >
        <DarkModeButton
          darkModeState={darkMode}
          onClickHandler={onClickHandler}
        />
        <div className="container mx-auto">
          {outlet ? <Outlet /> : children}
        </div>
      </div>
    </div>
  );
};
