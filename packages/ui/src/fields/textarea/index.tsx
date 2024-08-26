import styles from '../field.module.css';
import { Field, ErrorMessage } from 'formik';
import classNames from 'classnames';

type FieldTextAreaProps = {
  id: string;
  name: string;
  label: string;
  className?: string;
  placeholder?: string;
};

export const FieldTextArea = ({
  id,
  name,
  label,
  className = '',
  placeholder = '',
}: FieldTextAreaProps) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <Field
        id={id}
        name={name}
        type="textarea"
        className={classNames([styles.textarea, className])}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component="div" className={styles.error} />
    </div>
  );
}
