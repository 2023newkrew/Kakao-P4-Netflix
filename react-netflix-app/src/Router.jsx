import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Search } from "pages";
import DefaultLayout from "layouts/DefaultLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Main />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
