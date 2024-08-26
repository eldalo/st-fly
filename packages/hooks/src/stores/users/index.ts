import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@st-fly/hooks';
import { UserType, UserStateType } from '@st-fly/types';

const initialState: UserStateType = {
  loading: false,
  items: [],
};

export const UserStore = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserType>) => {
      state.items.push(action.payload);
    },
    editUser: (state, action: PayloadAction<UserType>) => {
      const userIndex = state.items.findIndex(
        ({ id }) => id === action.payload.id,
      );
      if (userIndex !== -1) {
        state.items[userIndex] = action.payload;
      }
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addUser, editUser, deleteUser } = UserStore.actions;

export const selectUsers = (state: RootState) => state.users;

export default UserStore.reducer;
