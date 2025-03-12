import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchWishlist = async () => {
    try {
        const res = await fetch("http://localhost:3000/wishlist")
        if (!res.ok) {
            alert("http error")
            return;
        }
        const data = await res.json()
        console.log("in fetchWishlist", data);

        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}


const addNewWishlist = async (prd) => {
    console.log("action : " + prd);

    let response = await fetch('http://localhost:3000/wishlist', {
        method: 'POST',
        body: JSON.stringify(prd),
        headers: { "Content-Type": "application/json; charset=UTF-8" }
    });
    if (!response.ok) {
        alert("Failed to add");
        return;
    }

    let data = await response.json();
    alert("Product added");
    console.log('Added', data);

    return data;
}
const deleteWishlist = async (prdId) => {
    console.log("action : " + prdId);

    let response = await fetch('http://localhost:3000/wishlist/' + prdId, {
        method: 'delete',
    });
    if (!response.ok) {
        alert("Failed to delete");
        return;
    }
    return prdId

}

export const fetchDataThunkWishlist = createAsyncThunk('fetchWishlist', fetchWishlist)
export const addNewWishlistThunk = createAsyncThunk('addNewWishlist', addNewWishlist)
export const deleteWishlistThunk = createAsyncThunk('deleteWishlist', deleteWishlist)

const wishlistSlice = createSlice(
    {
        name: 'wishlistSlice',
        initialState: {
            items: []
        },
        reducers: {

        },
        extraReducers: (builder) => {
            builder.addCase(fetchDataThunkWishlist.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            builder.addCase(addNewWishlistThunk.fulfilled, (state, action) => {
                state.items = [...state.items, action.payload];
                console.log("state" + state.items);
            })
            builder.addCase(deleteWishlistThunk.fulfilled, (state, action) => {
                state.items = state.items.filter((prd) => prd.id != action.payload);
                console.log("state : " + state.items);
            })
        },

    }
)
export const addWishlist = wishlistSlice.actions.addWishlist;

export default wishlistSlice;
