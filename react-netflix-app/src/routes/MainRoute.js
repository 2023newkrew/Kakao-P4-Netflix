import { Routes, Route } from "react-router-dom";

import React, { lazy, Suspense } from "react";

import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";

const MainPage = lazy(() => import("@pages/MainPage"));
const SearchPage = lazy(() => import("@pages/SearchPage"));

const MainRoute = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRoute;
