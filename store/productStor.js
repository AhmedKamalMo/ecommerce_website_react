import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchData = async () => {
    try {
        const res = await fetch("http://localhost:3000/products");

        if (!res.ok) {
            alert("http error")
            return;
        }
        const data = await res.json();
        console.log("prdData : ", data);

        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const fetchDataThunk = createAsyncThunk('fetchData', fetchData)

const productsSlice = createSlice(
    {
        name: 'productSlice',
        initialState: {
            items: [],
            isLoading: false,
            error: null
        },
        extraReducers: (builder) => {
            builder.addCase(fetchDataThunk.fulfilled, (state, action) => {
                state.items = action.payload;
                state.error = null;
                state.isLoading = false;

            })
            builder.addCase(fetchDataThunk.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            builder.addCase(fetchDataThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
        }
    }
)
export default productsSlice