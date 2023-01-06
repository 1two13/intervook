import { createSlice } from '@reduxjs/toolkit';

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
