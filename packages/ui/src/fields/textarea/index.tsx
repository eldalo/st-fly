import styles from '../field.module.css';
import { useField, ErrorMessage } from 'formik';
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
  ...props
}: FieldTextAreaProps) => {
  const [field] = useField({ ...props, name });

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <textarea
        {...field}
        {...props}
        className={classNames([styles.textarea, className])}
      />
      <ErrorMessage name={name} component="div" className={styles.error} />
    </div>
  );
}
