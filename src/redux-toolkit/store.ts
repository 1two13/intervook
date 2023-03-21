import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './slices/authSlice';
import { joinSlice } from './slices/joinSlice';
import { selectSlice } from './slices/selectSlice';
import { writingSlice } from './slices/writingSlice';
import { myPageSlice } from './slices/myPageSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    join: joinSlice.reducer,
    writing: writingSlice.reducer,
    select: selectSlice.reducer,
    myPage: myPageSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
