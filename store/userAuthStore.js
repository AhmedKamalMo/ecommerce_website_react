import { createSlice } from "@reduxjs/toolkit";

const checkLogin = localStorage.getItem("userAuth") ? true : false;



const userAuth = createSlice(
    {
        name: 'userAuthSlice',
        initialState: {
            Auth: checkLogin
        },
        reducers: {

            login(state) {
                state.Auth = true;
            },
            logout(state) {
                state.Auth = false;
                localStorage.removeItem("userAuth");
            }


        },

    }
)
export const Userlogin = userAuth.actions.login;
export const Userlogout = userAuth.actions.logout;
export default userAuth;
