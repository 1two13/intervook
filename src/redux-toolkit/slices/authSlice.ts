import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: { id: 0, username: '', isLogin: false },
  reducers: {
    login: (state, action) => {
      state.id = action.payload;
      state.isLogin = true;
    },
    logout: (state, action) => {
      state.id = 0;
      state.username = '';
      state.isLogin = false;
    },
  },
});
