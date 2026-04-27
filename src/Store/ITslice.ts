'use client';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { allapi } from '@/services/api';

type HomeState = {
  sections: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: HomeState = {
  sections: [],
  status: 'idle',
  error: null,
};

export const fetchItPage = createAsyncThunk(
  'It/fetchItPage',
 
  async () => {
    const res = await allapi.getpage();
    return res?.data?.data?.sections ;
  },
  {
    condition: (_, { getState }) => {
      const state = getState() as { It: HomeState };
      return state.It.status === 'idle';
    },
  }

);

const homeSlice = createSlice({
  name: 'It',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItPage.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchItPage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.sections = action.payload;
      })
      .addCase(fetchItPage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch It page';
      });
  },
});

export default homeSlice.reducer;
