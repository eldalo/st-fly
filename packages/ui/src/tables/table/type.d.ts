/* eslint-disable @nx/enforce-module-boundaries */
import { ColumnDef } from '@tanstack/react-table';

export type TABLE_THEME = 'light' | 'gray' | 'dark';

export type TABLE_ROUNDED = 'none' | 'rounded_5' | 'rounded_10';

export type TableBasePropsType<T> = {
  columns: ColumnDef<T>[];
  data?: T[];
  theme?: TABLE_THEME;
  rounded?: TABLE_ROUNDED;
};
