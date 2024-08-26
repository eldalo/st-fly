/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from '../field.module.css';
import { ChangeEvent } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import classNames from 'classnames';

type FieldTextProps = {
  id: string;
  name: string;
  type: string;
  label: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  register?: UseFormRegister<any> | null;
  error?: FieldErrors<any> | undefined | null;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
};

export const FieldText = ({
  id,
  name,
  type = 'text',
  label,
  className = '',
  placeholder = '',
  disabled = false,
  register = null,
  error = null,
  onChange,
  defaultValue,
}: FieldTextProps) => {
  const applyRegister = register ? register(name) : {};

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className={classNames([styles.input, className])}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={defaultValue}
        disabled={disabled}
        {...applyRegister}
      />
      {error && <span className={styles.error}>{error[name]?.message as string}</span>}
    </div>
  );
}
