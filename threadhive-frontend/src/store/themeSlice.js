import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    darkMode: localStorage.getItem('darkMode') === 'true',
  },
  reducers: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
      localStorage.setItem('darkMode', state.darkMode);
      if (state.darkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;

export const selectDarkMode = (state) => state.theme.darkMode;

export default themeSlice.reducer;
