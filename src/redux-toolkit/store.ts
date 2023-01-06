import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './slices/authSlice';
import { joinSlice } from './slices/joinSlice';
import { writingSlice } from './slices/writingSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    join: joinSlice.reducer,
    writing: writingSlice.reducer,
  },
});
