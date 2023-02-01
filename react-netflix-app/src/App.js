import { Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import SearchResult from "./components/SearchResult/SearchResult";

import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Main />} />
          <Route path="search/:keyword" element={<SearchResult />} />
          <Route path="*" element={<Main />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
