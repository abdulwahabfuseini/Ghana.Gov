import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Application from "./pages/Application";
import Feedback from "./pages/Feedback";
import LogIn from "./pages/account/LogIn";
import Signup from "./pages/account/Signup";
import Apply from "./pages/account/Apply";
import Register from "./pages/account/Register";
import PageNotFound from "./pages/PageNotFound";
import Ministries from "./pages/Ministries";
import Category from "./pages/Category";
import Mdas from "./pages/Mdas";




const LazyAbout = React.lazy(() => import("./pages/About"));

const ScrollTotop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <ScrollTotop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route exact path="search" element={<Search />} />
        <Route path="find-application" element={<Application />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<Signup />} />
        <Route path="apply" element={<Apply />} />
        <Route path="register" element={<Register />} />
        <Route path="ministries/:id" element={<Ministries />} />
        <Route path="category/:id" element={<Category />} />
        <Route path="mdas/:id" element={<Mdas />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
