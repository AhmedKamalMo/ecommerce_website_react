import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const usrsData = async () => {
    try {
        const res = await fetch("http://localhost:3000/user");

        if (!res.ok) {
            alert("http error")
            return;
        }
        const data = await res.json();
        console.log("usrsData : ", data);

        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}
const addUsr = async (usr) => {
    try {
        const res = await fetch("http://localhost:3000/user",
            {
                method: 'POST',
                body: JSON.stringify(usr),
                headers: { "Content-Type": "application/json; charset=UTF-8" }
            }
        );

        if (!res.ok) {
            alert("Failed to add");
            return;
        }

        let data = await res.json();
        alert("successful");
        console.log('Added', data);

        return data;

    } catch (error) {
        console.error(error);
        return null;
    }
}

export const fetchUsrDataThunk = createAsyncThunk('fetchUsrData', usrsData)
export const addUserThunk = createAsyncThunk('addUsr', addUsr)
const usrsSlice = createSlice(
    {
        name: 'productSlice',
        initialState: {
            users: []
        },
        extraReducers: (builder) => {
            builder.addCase(fetchUsrDataThunk.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            builder.addCase(addUserThunk.fulfilled, (state, action) => {
                state.users = [...state.users, action.payload];
                console.log("state" + state.users);
            })
        }
    }
)
export default usrsSlice