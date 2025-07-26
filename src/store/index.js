import { configureStore } from "@reduxjs/toolkit";
import listMovieSlice from "../pages/HomeTemplate/ListMoviePage/slice";
import movieDetailSlice from "../pages/HomeTemplate/MovieDetailsPage/slice";

export default configureStore({
  reducer: {
    listMovieSlice,
    movieDetailSlice,
  },
});
