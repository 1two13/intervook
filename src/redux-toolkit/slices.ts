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

export const writingSlice = createSlice({
  name: 'writing',
  initialState: { isLink: false, isImage: false, urlArray: [] as any },
  reducers: {
    link: (state, action) => {
      state.isLink = !state.isLink;
    },
    image: (state, action) => {
      state.isImage = !state.isImage;
    },
    urlArray: (state, action) => {
      state.urlArray.push(action.payload);
    },
  },
});
