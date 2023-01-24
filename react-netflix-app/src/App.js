import { Routes, Route } from "react-router-dom";

import MainPage from "@pages/MainPage";
import LoginPage from "@pages/LoginPage";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};

export default App;
