import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookItems: [],
  isLoading: true,
};

const bookItemsSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const bookId = action.payload;
      state = state;
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.bookItems = state.bookItems.filter((bookItem) => bookItem.id !== bookId);
    }
  }
});

export default cartSlice.reducer;
