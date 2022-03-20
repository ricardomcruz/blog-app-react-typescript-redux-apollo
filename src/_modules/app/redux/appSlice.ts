import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialAppState from './appStates';

const initialState = initialAppState;

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleDarkMode: ( state, { payload }: PayloadAction<boolean>) => {
      
      // save the darkMode in localStorage in order to keep it when we refresh the page
      localStorage.setItem('darkMode', payload ? '1' : '');
      
      state.darkMode = payload;
    },
  },
});

export const { toggleDarkMode } = appSlice.actions;
export default appSlice.reducer;
