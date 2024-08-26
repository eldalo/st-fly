export type TaskType = {
  id: string;
  name: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
};

export type TaskStateType = {
  loading: boolean;
  items: TaskType[];
};
