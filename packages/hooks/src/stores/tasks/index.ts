import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@st-fly/hooks';
import { TaskType, TaskStateType } from '@st-fly/types';

const initialState: TaskStateType = {
  loading: false,
  items: [],
};

export const TaskStore = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskType>) => {
      state.items.push(action.payload);
    },
    editTask: (state, action: PayloadAction<TaskType>) => {
      const taskIndex = state.items.findIndex(
        ({ id }) => id === action.payload.id,
      );
      if (taskIndex !== -1) {
        state.items[taskIndex] = action.payload;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addTask, editTask, deleteTask } = TaskStore.actions;

export const selectTasks = (state: RootState) => state.tasks;

export default TaskStore.reducer;
