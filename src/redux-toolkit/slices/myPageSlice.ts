import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  setNickname: string;
  isDuplicate: boolean;
}

const initialState: IInitialState = {
  setNickname: '',
  isDuplicate: false,
};

export const myPageSlice = createSlice({
  name: 'myPage',
  initialState: initialState,
  reducers: {
    setNickname: (state, action) => {
      state.setNickname = action.payload;
    },
    isDuplicate: (state, action) => {
      state.isDuplicate = action.payload;
    },
  },
});
