import styles from '../form.module.css';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';

import { addTask, editTask } from '@st-fly/hooks';
import { generateNanoId, SCHEMA_TASKS } from '@st-fly/shared';
import { TaskType } from '@st-fly/types';
import { Button, FieldText, FieldTextArea } from '@st-fly/ui';

type TaskFormProps = {
  data?: TaskType;
  title: string;
  type: 'add' | 'edit';
  cancelOnClick: () => void;
};

export const TaskForm = ({
  data,
  title,
  type,
  cancelOnClick,
}: TaskFormProps) => {
  const defaultData = {
    id: '',
    name: '',
    description: '',
  };
  const dispatch = useDispatch();

  const handleSubmit = (user: TaskType, { resetForm }: { resetForm: () => void }) => {
    if (type === 'add') {
      dispatch(addTask({ ...user, id: generateNanoId(5) }));
    } else {
      dispatch(editTask(user));
    }

    resetForm();
    cancelOnClick();
  }

  return (
    <Formik
      initialValues={data || defaultData}
      validationSchema={SCHEMA_TASKS}
      onSubmit={handleSubmit}
      enableReinitialize
      resetForm
    >
      <Form className={styles.form}>
        <h3 className={styles.title}>{title}</h3>
        <FieldText id="id" name="id" className="d-none" />
        <div className="row">
          <div className="col-12">
            <FieldText
              id="name"
              name='name'
              type="text"
              label='Name'
              placeholder="Name"
            />
          </div>
          <div className="col-12 col-md-12">
            <FieldTextArea
              id="description"
              name='description'
              label='Description'
              placeholder="Description"
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 col-md-5">
            <Button
              type="submit"
              theme="success"
              width="width_100"
            >
              Save <i className="icon-Atom_Icon-Correct" />
            </Button>

          </div>
          <div className="col-6 col-md-5">
            <Button
              type="button"
              theme="white"
              width="width_100"
              onClick={cancelOnClick}
            >
              Cancel <i className="icon-Atom_Icon-Close" />
            </Button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}
