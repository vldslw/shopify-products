import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  products: [],
  error: false,
};

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
  const response = await fetch('http://localhost:4000/api/products');
  return response.json();
});

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      }),
      builder.addCase(fetchProducts.rejected, (state, action) => {
        state.error = true;
        console.error('Error fetching products:', action.error.message);
      });
  },
});

export default productsSlice.reducer;
