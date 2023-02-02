import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Search } from "pages";
import { Header } from "components";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
