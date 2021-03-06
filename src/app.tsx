import React, { Suspense, useLayoutEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";

import { Router } from "./router";
import Fallback from "./fallback";

import "./index.css";

// adding this wrapper to scroll to the top of the page
// when user uses navigation in the recipes page
const Wrapper = ({ children }: { children: any }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Suspense fallback={<Fallback />}>
          <Wrapper>
            <Router />
          </Wrapper>
        </Suspense>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
