export type UserType = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

export type UserStateType = {
  loading: boolean;
  items: UserType[];
};
