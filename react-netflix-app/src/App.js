import { Routes, Route } from "react-router-dom";

import React, { lazy, Suspense } from "react";

import { getCookie } from "@utils/cookie";
import MainRoute from "./routes/MainRoute";

const LoginPage = lazy(() => import("@pages/LoginPage"));

const App = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/*" element={getCookie("accessToken") ? <MainRoute /> : <LoginPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
