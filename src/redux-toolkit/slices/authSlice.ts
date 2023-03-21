import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: { email: 0, username: '', isLogin: false },
  reducers: {
    login: (state, action) => {
      state.email = action.payload;
      state.isLogin = true;
    },
    logout: (state, action) => {
      state.email = 0;
      state.username = '';
      state.isLogin = false;
    },
  },
});
