import { configureStore } from '@reduxjs/toolkit';

import { authSlice, joinSlice } from './slices';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    join: joinSlice.reducer,
  },
});
