import styles from '../field.module.css';
import { Field, ErrorMessage } from 'formik';
import classNames from 'classnames';

type FieldTextProps = {
  id: string;
  name: string;
  type?: string;
  label?: string;
  className?: string;
  placeholder?: string;
};

export const FieldText = ({
  id,
  name,
  type = 'text',
  label,
  className = '',
  placeholder = '',
}: FieldTextProps) => {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <Field
        id={id}
        name={name}
        type={type}
        className={classNames([styles.input, className])}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component="div" className={styles.error} />
    </div>
  );
}
