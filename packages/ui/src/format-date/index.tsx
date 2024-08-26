import { format, formatDistanceToNowStrict } from 'date-fns';

import {
  FORMAT_DATE_SHORT,
  FORMAT_DATE_TIME_SHORT,
  FORMAT_DEFAULT_US,
  FORMAT_TIME_SHORT,
} from '@st-fly/shared';

type FormatDateProps = {
  value?: string | null;
  type?:
  | 'default'
  | 'date-short'
  | 'date-short-time'
  | 'distance'
  | 'short-time';
};

export function FormatDate({ value, type = 'default' }: FormatDateProps) {
  if (value) {
    let now = '';
    switch (type) {
      case 'date-short':
        now = format(new Date(value), FORMAT_DATE_SHORT);
        break;
      case 'date-short-time':
        now = format(new Date(value), FORMAT_DATE_TIME_SHORT);
        break;
      case 'distance':
        now = formatDistanceToNowStrict(new Date(value), { addSuffix: true });
        break;
      case 'short-time':
        now = format(new Date(value), FORMAT_TIME_SHORT);
        break;
      default:
        now = format(new Date(value), FORMAT_DEFAULT_US);
        break;
    }

    return <span title={now}>{now}</span>;
  }

  return <span>--</span>;
}
