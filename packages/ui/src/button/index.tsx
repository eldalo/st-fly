import styles from './button.module.css';
import classNames from 'classnames';

import {
  BUTTON_SIZE,
  BUTTON_STYLE,
  BUTTON_ROUNDED,
  BUTTON_WIDTH
} from './type';

type ButtonProps = {
  type: 'button' | 'submit';
  children: React.ReactNode;
  theme: BUTTON_STYLE;
  size?: BUTTON_SIZE;
  rounded?: BUTTON_ROUNDED;
  width?: BUTTON_WIDTH
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({
  type,
  theme = 'primary',
  className = '',
  size = 'medium',
  width = 'width_auto',
  rounded = 'rounded_5',
  disabled = false,
  onClick,
  children
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={classNames(styles.base, [
        styles[theme],
        styles[size],
        styles[rounded],
        styles[width],
        className,
      ])}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
