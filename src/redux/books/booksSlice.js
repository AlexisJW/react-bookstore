import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_BOOK_API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3jZg3oGfE2XNwfvMfImP';

const initialState = {
  bookItems: [],
  isLoading: true,
};

export const getBookItems = createAsyncThunk(
  'book/getBookItems',
  async (payload, thunkAPI) => {
    try {
      const resp = await axios.get(`${URL_BOOK_API}/books`, { });
      const { data } = resp;

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addBook = createAsyncThunk('book/addBook', async (payload, thunkAPI) => {
  try {
    await axios.post(`${URL_BOOK_API}/books`, { ...payload });
    thunkAPI.dispatch(getBookItems());
    return payload;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const removeBook = createAsyncThunk('book/removeBook', async (payload, thunkAPI) => {
  try {
    await axios.delete(`${URL_BOOK_API}/books/${payload}`);
    thunkAPI.dispatch(getBookItems());
    return payload;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const bookItemsSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addBook.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(addBook.fulfilled,
        (state) => ({ ...state, isLoading: false }))
      .addCase(addBook.rejected, (state) => ({ ...state, isLoading: false }))
      .addCase(removeBook.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(removeBook.fulfilled,
        (state) => ({ ...state, isLoading: false }))
      .addCase(removeBook.rejected, (state) => ({ ...state, isLoading: false }))
      .addCase(getBookItems.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getBookItems.fulfilled,
        (state, { payload }) => {
          const array = [];
          const entries = Object.entries(payload);
          entries.forEach((entry) => {
            array.push({ item_id: entry[0], ...entry[1][0], progress: '0%' });
          });

          return ({ ...state, isLoading: false, bookItems: array });
        })
      .addCase(getBookItems.rejected, (state) => ({ ...state, isLoading: false }));
  },
});

const booksReducer = bookItemsSlice.reducer;
export default booksReducer;
