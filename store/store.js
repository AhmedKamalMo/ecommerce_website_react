import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productStor";
import userAuth from "./userAuthStore";
import wishlistSlice from "./WishlistStore";
import usrsSlice from "./userStore";


const store = configureStore({
    reducer: {
        prd: productsSlice.reducer,
        wishlist: wishlistSlice.reducer,
        userAuth: userAuth.reducer,
        usersData: usrsSlice.reducer
    }
})

export default store