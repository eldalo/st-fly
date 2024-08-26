import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const DEFAULT_REQUIRED_ERROR = 'This is required';

export const SCHEMA_TASKS = zodResolver(
  z.object({
    name: z.string({ required_error: DEFAULT_REQUIRED_ERROR }),
    description: z.string({ required_error: DEFAULT_REQUIRED_ERROR }),
  }),
);

export const SCHEMA_USERS = zodResolver(
  z.object({
    name: z.string({ required_error: DEFAULT_REQUIRED_ERROR }),
    email: z
      .string({ required_error: DEFAULT_REQUIRED_ERROR })
      .email({ message: 'Invalid email' }),
    phone: z
      .number({ required_error: DEFAULT_REQUIRED_ERROR })
      .int({ message: 'Invalid phone' })
      .gte(10, { message: 'Phone number must be at least 10 characters' })
      .lte(10, { message: 'Phone number must be at most 10 characters' }),
  }),
);
