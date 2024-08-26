export type UserType = {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt?: string;
  updatedAt?: string;
};

export type UserStateType = {
  loading: boolean;
  items: UserType[];
};
