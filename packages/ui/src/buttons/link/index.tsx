import styles from '../button.module.css';
import { Link, To } from 'react-router-dom';
import classNames from 'classnames';

import {
  BUTTON_SIZE,
  BUTTON_STYLE,
  BUTTON_ROUNDED,
  BUTTON_WIDTH,
} from '../type';

type LinkButtonProps = {
  to: To;
  theme: BUTTON_STYLE;
  children: React.ReactNode;
  className?: string;
  size?: BUTTON_SIZE;
  width?: BUTTON_WIDTH;
  rounded?: BUTTON_ROUNDED;
  disabled?: boolean;
  target?: React.HTMLAttributeAnchorTarget;
}

export function LinkButton({
  to,
  theme = 'primary',
  children,
  className = '',
  size = 'medium',
  width = 'width_auto',
  rounded = 'rounded_5',
  target = '_self',
}: LinkButtonProps) {
  return (
    <Link
      to={to}
      className={classNames(styles.base, [
        styles[theme],
        styles[size],
        styles[rounded],
        styles[width],
        className,
      ])}
      target={target}
    >
      {children}
    </Link>
  );
}
