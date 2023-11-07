import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  appLoader: false,
  bottomTabVisible: true,
};
export const configSlice = createSlice({
  name: 'Config',
  initialState,
  reducers: {
    setAppLoader: (state, action) => {
      state.appLoader = action.payload;
    },
    setBottomTabVisible: (state, action) => {
      state.bottomTabVisible = action.payload;
    },
  },
});

export const {setAppLoader, setBottomTabVisible} = configSlice.actions;
export const selectAppLoader = state => state.Config.appLoader;
export const selectBottomTabVisible = state => state.Config.bottomTabVisible;
export default configSlice.reducer;
