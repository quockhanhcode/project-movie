import { Route } from "react-router-dom";
import AdminTemplate from "../pages/AdminTemplate";
import AddUser from "../pages/AdminTemplate/AddUser";
import DasBoard from "../pages/AdminTemplate/DasBoard";
import HomeTemplate from "../pages/HomeTemplate";
import AboutPage from "../pages/HomeTemplate/AboutPage";
import HomePage from "../pages/HomeTemplate/HomePage";
import ListMoviePage from "../pages/HomeTemplate/ListMoviePage";
import NewsPage from "../pages/HomeTemplate/NewsPage";
import LoginPgae from "../pages/HomeTemplate/LoginPage";
import RegisterPage from "../pages/HomeTemplate/RegisterPage";
import AuthPage from "../pages/AdminTemplate/AuthPage";
import MovieDetailsPage from "../pages/HomeTemplate/MovieDetailsPage";
import MovieManagement from "../pages/AdminTemplate/MovieManagement";
import AddMovie from "../pages/AdminTemplate/AddMovie";
const routes = [
  {
    path: "",
    element: HomeTemplate,
    nested: [
      {
        path: "",
        element: HomePage,
      },
      {
        path: "about",
        element: AboutPage,
      },
      {
        path: "list-movie",
        element: ListMoviePage,
      },
      {
        path: "movie-detail/:movieId",
        element: MovieDetailsPage,
      },
      {
        path: "news",
        element: NewsPage,
      },
      {
        path: "login",
        element: LoginPgae,
      },
      {
        path: "register",
        element: RegisterPage,
      },
    ],
  },
  {
    path: "admin",
    element: AdminTemplate,
    nested: [
      {
        path: "dasboard",
        element: DasBoard,
      },
      {
        path: "add-user",
        element: AddUser,
      },
      {
        path: "movies-management",
        element: MovieManagement,
      },
      {
        path: "movies-management/add-movie",
        element: AddMovie,
      },
    ],
  },
  {
    path: "auth",
    element: AuthPage,
  },
];

export const generateRoutes = () => {
  return routes.map((route) => {
    if (route.nested) {
      return (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.nested.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={<item.element />}
            />
          ))}
        </Route>
      );
    } else {
      return (
        <Route key={route.path} path={route.path} element={<route.element />} />
      );
    }
  });
};
