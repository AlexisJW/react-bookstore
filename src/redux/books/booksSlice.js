import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const bookItemsSlice = createSlice({
  name: 'book',
  initialState,
});

export default cartSlice.reducer;
