/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from '../field.module.css';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import classNames from 'classnames';

type FieldTextAreaProps = {
  id: string;
  name: string;
  label: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  register?: UseFormRegister<any> | null;
  error?: FieldErrors<any> | undefined | null;
  defaultValue?: string;
};

export const FieldTextArea = ({
  id,
  name,
  label,
  className = '',
  placeholder = '',
  disabled = false,
  register = null,
  error = null,
  defaultValue,
}: FieldTextAreaProps) => {
  const applyRegister = register ? register(name) : {};

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        className={classNames([styles.textarea, className])}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        {...applyRegister}
      />
      {error && <span className={styles.error}>{error[name]?.message as string}</span>}
    </div>
  );
}
