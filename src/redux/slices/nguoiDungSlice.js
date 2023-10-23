import { createSlice, current } from '@reduxjs/toolkit';
import { getLocalStore } from '../../utils/localStore';
import { https } from '../../services/config';

// initalState
const initialState = {
  userLogin: getLocalStore('userLogin'), //null || {}
};

const nguoiDungSlice = createSlice({
  name: 'nguoiDung',
  initialState,
  reducers: {
    getInfoUser: (state, action) => {
      console.log(current(state));
      console.log(action);
      state.userLogin = action.payload;
    },
  },
});

export const { getInfoUser } = nguoiDungSlice.actions;

export default nguoiDungSlice.reducer;
