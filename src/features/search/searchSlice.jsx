import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAPI } from "./searchAPI";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchAPIAsync = createAsyncThunk(
  "data/fetchAllCode",
  async (postalCode) => {
    const response = await fetchAPI(postalCode);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearData: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAPIAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAPIAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
        // console.log(action.payload);
      })
      .addCase(fetchAPIAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.data = null;
      });
  },
});

export const { clearData } = searchSlice.actions;
export const postalDetails = (state) => state.search;
export default searchSlice.reducer;
