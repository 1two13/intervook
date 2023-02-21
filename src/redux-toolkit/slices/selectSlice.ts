import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  array: [category: string, type: string];
}

const initialState: IInitialState = {
  array: ['', ''],
};

export const selectSlice = createSlice({
  name: 'select',
  initialState: initialState,
  reducers: {
    updateCategory: (state, action) => {
      state.array[0] = action.payload;
    },
    updateType: (state, action) => {
      state.array[1] = action.payload;
    },
    reset: () => initialState,
  },
});
