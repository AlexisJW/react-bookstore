import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';
// https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3jZg3oGfE2XNwfvMfImP/books/
const books = [
  {
    id: uuidv4(),
    title: 'The 100',
    author: 'Alexis Walner',
    category: 'Computer sciences',
    progress: '2%',
  },
  {
    id: uuidv4(),
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Corme',
    category: 'Programmation',
    progress: '2%',
  },
  {
    id: uuidv4(),
    title: 'Computer Networks',
    author: 'Andrew S. Tanenbaum',
    category: 'Computer sciences',
    progress: '2%',
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
    addBook: (state, { payload }) => ({ bookItems: [...state.bookItems, payload] }),
    removeBook: (state, action) => {
      const bookId = action.payload;
      // eslint-disable-next-line
      state.bookItems = state.bookItems.filter((bookItem) => bookItem.id !== bookId);
    },
  },
});

export const {
  addBook, removeBook,
} = bookItemsSlice.actions;
export default bookItemsSlice.reducer;
