import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
  name: 'root',
  initialState: {
    loading: false,
    portfolioData: null,
  },
  reducers: {
    SetPortfolioData: (state, action) => {
      state.portfolioData = action.payload;
    },
    ShowLoading: (state) => {
      state.loading = true;
    },
    HideLoading: (state) => {
      state.loading = false;
    },
  },
});

// Fix: Export only the reducer here
export default rootSlice.reducer;  // This should fix the issue

export const { SetPortfolioData, ShowLoading, HideLoading } = rootSlice.actions;
