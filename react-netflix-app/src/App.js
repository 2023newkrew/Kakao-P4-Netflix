import { Routes, Route } from "react-router-dom";
import qs from "qs";

import React, { lazy, Suspense, useState } from "react";

import Header from "@components/header/Header";

// import MainPage from "@pages/MainPage";
// import SearchPage from "@pages/SearchPage";
const MainPage = lazy(() => import("@pages/MainPage"));
const SearchPage = lazy(() => import("@pages/SearchPage"));

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
