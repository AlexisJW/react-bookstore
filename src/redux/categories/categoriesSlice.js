import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoriesItems: [],
  isLoading: true,
};

const categoriesItemsSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      action = action;
      state = state;
    },
  },
});

export default categoriesItemsSlice.reducer;
