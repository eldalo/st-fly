import * as Yup from 'yup';

const DEFAULT_REQUIRED_ERROR = 'This is required';

export const SCHEMA_TASKS = Yup.object({
  name: Yup.string().required(DEFAULT_REQUIRED_ERROR),
  description: Yup.string().required(DEFAULT_REQUIRED_ERROR),
});

export const SCHEMA_USERS = Yup.object({
  name: Yup.string().required(DEFAULT_REQUIRED_ERROR),
  email: Yup.string().required(DEFAULT_REQUIRED_ERROR).email('Invalid email'),
  phone: Yup.string()
    .required(DEFAULT_REQUIRED_ERROR)
    .min(10, 'Phone number must be at least 10 characters')
    .max(10, 'Phone number must be at most 10 characters'),
});
