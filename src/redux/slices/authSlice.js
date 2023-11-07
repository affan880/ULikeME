import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {},
    isLogin: false,
    currentUserInfo: null,
    userAdditionalInfo : null
};
export const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user
            state.userAdditionalInfo = action.payload.userAdditionalInfo
            if(action.payload.userAdditionalInfo){
                state.isLogin = true
            }
        },
        logout: (state) => {
            state.user = null
            state.isLogin = false
            state.currentUserInfo = null,
            state.userAdditionalInfo = null
        },
        updateUser: (state, action) => {
            const updatedUser = {
                ...state.currentUserInfo,
                ...action.payload
              };
              state.currentUserInfo = updatedUser;
        },
        setCurrentUserInfo: (state, action) => {
            state.currentUserInfo = action.payload;
        },
    },
});

export const { login, logout, updateUser, setCurrentUser } = authSlice.actions;
export const selectUser = state => state.Auth.user;
export const userAdditionalInfo = state => state.Auth.userAdditionalInfo; 
export const selectIsLogin = state => state.Auth.isLogin;
export const currentUserInfo = state => state.Auth.currentUserInfo;
export default authSlice.reducer;