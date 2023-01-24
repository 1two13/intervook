import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isName: false,
  isEmail: false,
  isPassword: false,
  name: '',
  email: '',
  password: '',
};

export const joinSlice = createSlice({
  name: 'join',
  initialState: initialState,
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
    name: (state, action) => {
      state.name = action.payload;
    },
    email: (state, action) => {
      state.email = action.payload;
    },
    password: (state, action) => {
      state.password = action.payload;
    },
  },
});
