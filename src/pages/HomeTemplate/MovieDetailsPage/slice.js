import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../services/api";
const initialState = {
  movie: null,
  loading: false,
  error: null,
};

export const movieDetail = createAsyncThunk(
  "DetailMovie/fetchData",
  async (movieId, { rejectWithValue }) => {
    try {
      const result = await api.get(
        `/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`
      );
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const movieDetailSlice = createSlice({
  name: "movieDetailSlice",
  initialState,
  reducers: {},
  extraReducers: (builer) => {
    builer.addCase(movieDetail.pending, (state) => {
      state.loading = true;
    });
    builer.addCase(movieDetail.fulfilled, (state, action) => {
      (state.loading = false), (state.movie = action.payload);
    });
    builer.addCase(movieDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } =
//   movieDetailSlice.actions;

export default movieDetailSlice.reducer;
