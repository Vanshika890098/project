'use client';

import { configureStore } from '@reduxjs/toolkit';
import itReducer from './ITslice';

export const store = configureStore({
  reducer: {
    It: itReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;