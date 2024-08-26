import { configureStore } from '@reduxjs/toolkit';

import TaskReducer from '../tasks';
import UserReducer from '../users';

export const store = configureStore({
  reducer: {
    tasks: TaskReducer,
    users: UserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
