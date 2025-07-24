import "./App.css";
import HomeTemplate from "./pages/HomeTemplate";
import AdminTemplate from "./pages/AdminTemplate";
import HomePage from "./pages/HomeTemplate/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/HomeTemplate/AboutPage";
import ListMoviePage from "./pages/HomeTemplate/ListMoviePage";
import DasBoard from "./pages/AdminTemplate/DasBoard";
import AddUser from "./pages/AdminTemplate/AddUser";
import { generateRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {generateRoutes()}
        {/* Home Template
        <Route path="" element={<HomeTemplate />}>
          <Route path="" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="list-movie" element={<ListMoviePage />} />
        </Route>
        Admin Template
        <Route path="admin" element={<AdminTemplate />}>
          <Route path="dasboard" element={<DasBoard />} />
          <Route path="add-user" element={<AddUser />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
