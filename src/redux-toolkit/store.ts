import { configureStore } from '@reduxjs/toolkit';

import { authSlice, joinSlice, writingSlice } from './slices';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    join: joinSlice.reducer,
    writing: writingSlice.reducer,
  },
});
