import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        loginModalOpen: false,
        registerModalOpen: false,
        languageModalOpen: false
    },
    reducers: {
        LoginModalOpen: (state) => {
            state.loginModalOpen = true
            state.registerModalOpen = false
            state.languageModalOpen = false
        },
        LoginModalClose: (state) => {
            state.loginModalOpen = false
        },
        RegisterModalOpen: (state) => {
            state.registerModalOpen = true
            state.loginModalOpen = false
            state.languageModalOpen = false
        },
        RegisterModalClose: (state) => {
            state.registerModalOpen = false
        },
        LanguageModalOpen: (state) => {
            state.languageModalOpen = true
            state.loginModalOpen = false
            state.registerModalOpen = false
        },
        LanguageModalClose: (state) => {
            state.languageModalOpen = false
        }

    }
});

export const { LoginModalOpen, LoginModalClose, RegisterModalOpen, RegisterModalClose, LanguageModalOpen, LanguageModalClose } = modalSlice.actions;
export default modalSlice.reducer;
