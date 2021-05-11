import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from 'store/login/state';

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    updateLoginStatus(state, action: PayloadAction<boolean>) {
      state.loggedIn = action.payload;
    },
  },
});

export const updateLoginStatus = loginSlice.actions.updateLoginStatus;

export default loginSlice.reducer;
