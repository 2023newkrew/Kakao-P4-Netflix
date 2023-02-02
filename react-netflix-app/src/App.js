import { Routes, Route } from "react-router-dom";

import React, { lazy, Suspense } from "react";

import { getCookie } from "@utils/cookie";

const MainPage = lazy(() => import("@pages/MainPage"));
const SearchPage = lazy(() => import("@pages/SearchPage"));
const LoginPage = lazy(() => import("@pages/LoginPage"));

const App = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={getCookie("accessToken") ? <MainPage /> : <LoginPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
