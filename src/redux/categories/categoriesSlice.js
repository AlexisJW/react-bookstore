import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoriesItems: [],
};

const categoriesItemsSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: (state, { payload }) => {
      const categories = payload === 'Under construction'
        ? 'Under construction'
        : state.categoriesItems;

      return ({ categories });
    },
  },
});

export const {
  checkStatus
} = categoriesItemsSlice.actions;

export default categoriesItemsSlice.reducer;
