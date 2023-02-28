import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';

const books = [
  {
    id: uuidv4(),
    title: 'The 100',
    author: 'Alexis Walner',
  },
  {
    id: uuidv4(),
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Corme',
  },
  {
    id: uuidv4(),
    title: 'Computer Networks',
    author: 'Andrew S. Tanenbaum',
  },
];

const initialState = {
  bookItems: books,
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
    },
  },
});

export const {
  addBook, removeBook,
} = bookItemsSlice.actions;
export default bookItemsSlice.reducer;
