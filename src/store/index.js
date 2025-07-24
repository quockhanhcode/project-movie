import { configureStore } from "@reduxjs/toolkit";
import listMovieSlice from "../pages/HomeTemplate/ListMoviePage/slice";

export default configureStore({
  reducer: {
    listMovieSlice,
  },
});
