import { configureStore } from '@reduxjs/toolkit';

import { joinSlice, authSlice } from './slices';

const store = configureStore({
  reducer: {
    join: joinSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
