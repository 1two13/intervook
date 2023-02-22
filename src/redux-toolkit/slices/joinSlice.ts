import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  isName: boolean;
  isEmail: boolean;
  isPassword: boolean;
  isCorrect: boolean;
  name: string;
  email: string;
  password: string;
}

const initialState: IInitialState = {
  isName: false,
  isEmail: false,
  isPassword: false,
  isCorrect: false,
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
    isCorrect: (state, action) => {
      state.isCorrect = action.payload;
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
