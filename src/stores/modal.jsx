import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        loginModalOpen: false,
        registerModalOpen: false
    },
    reducers: {
        LoginModalOpen: (state) => {
            state.loginModalOpen = true
        },
        LoginModalClose: (state) => {
            state.loginModalOpen = false
        },
        RegisterModalOpen: (state) => {
            state.registerModalOpen = true
        },
        RegisterModalClose: (state) => {
            state.registerModalOpen = false
        }

    }
});

export const { LoginModalOpen, LoginModalClose, RegisterModalOpen, RegisterModalClose } = modalSlice.actions;
export default modalSlice.reducer;
