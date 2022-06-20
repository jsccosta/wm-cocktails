import React, { Suspense, useLayoutEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";

import { Router } from "./router";
import Fallback from "./fallback";

import "./index.css";

const Wrapper = ({ children }: { children: any }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const App = () => (
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

export default App;
