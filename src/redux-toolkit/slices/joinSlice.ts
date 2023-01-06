import { createSlice } from '@reduxjs/toolkit';

export const joinSlice = createSlice({
  name: 'join',
  initialState: { isName: false, isEmail: false, isPassword: false },
  reducers: {
    isName: (state, action) => {
      state.isName = action.payload;
    },
    isEmail: (state, action) => {
      state.isEmail = action.payload;
    },
    isPassword: (state, action) => {
      state.isPassword = action.payload;
    },
  },
});
