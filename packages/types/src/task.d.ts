export type TaskType = {
  id: string;
  name: string;
  description: string;
};

export type TaskStateType = {
  loading: boolean;
  items: TaskType[];
};
