import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "./../../../services/api";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const fetchListMovie = createAsyncThunk(
  "ListMovie/fetchData",
  async (__dirname, { rejectWithValue }) => {
    try {
      const result = await api.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const listMovieSlice = createSlice({
  name: "listMovieSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchListMovie.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchListMovie.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchListMovie.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
// export const {} = listMovieSlice.actions;

export default listMovieSlice.reducer;
