import styles from '../form.module.css';
import { useForm } from 'react-hook-form';

import { TaskType } from '@st-fly/types';
import { Button, FieldText, FieldTextArea } from '@st-fly/ui';

type TaskFormProps = {
  data: TaskType;
  title: string;
  buttonSaveOnClick: (task: TaskType) => void;
  buttonCancelOnClick: () => void;
};

export const TaskForm = ({
  data,
  title,
  buttonSaveOnClick,
  buttonCancelOnClick,
}: TaskFormProps) => {
  const {
    handleSubmit,
    // control,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    defaultValues: data,
  });

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(() => buttonSaveOnClick(data))}
    >
      <h3 className={styles.title}>{title}</h3>
      <div className="row">
        <div className="col-12">
          <FieldText
            id="name"
            name='name'
            type="text"
            label='Name'
            placeholder="Name"
            error={errors}
          />
        </div>
        <div className="col-12 col-md-12">
          <FieldTextArea
            id="description"
            name='description'
            label='Description'
            placeholder="Description"
            error={errors}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-6 col-md-5">
          <Button
            type="submit"
            theme="success"
            width="width_100"
            disabled={!isValid}
          >
            {isSubmitting ? 'Saving...' : 'Save'} <i className="icon-Atom_Icon-Correct" />
          </Button>

        </div>
        <div className="col-6 col-md-5">
          <Button
            type="button"
            theme="white"
            width="width_100"
            onClick={() => buttonCancelOnClick()}
          >
            Cancel <i className="icon-Atom_Icon-Close" />
          </Button>
        </div>
      </div>
    </form>
  );
}
