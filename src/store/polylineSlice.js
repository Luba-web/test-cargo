import { createSlice } from '@reduxjs/toolkit';

export const polylineSlice = createSlice({
  name: 'polyline',
  initialState: {
    data: null,
    error: '',
    loading: false,
  },
  reducers: {
    getPolylineFetch: (state) => {
      state.loading = true;
    },
    getPolylineSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    getPolylineError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const polylineActions = polylineSlice.actions;

export const { getPolylineFetch, getPolylineSuccess, getPolylineError } =
  polylineSlice.actions;

export default polylineSlice.reducer;
