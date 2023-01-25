import { Routes, Route } from "react-router-dom";
import qs from "qs";

import React, { useState } from "react";
import MainPage from "@pages/MainPage";
import SearchPage from "@pages/SearchPage";
import Header from "./components/header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </>
  );
};

export default App;
