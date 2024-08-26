import styles from '../form.module.css';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';

import { addUser, editUser } from '@st-fly/hooks';
import { generateNanoId, SCHEMA_USERS } from '@st-fly/shared';
import { UserType } from '@st-fly/types';
import { Button, FieldText } from '@st-fly/ui';

type UserFormProps = {
  data?: UserType;
  title: string;
  type: 'add' | 'edit';
  cancelOnClick: () => void;
};

export const UserForm = ({
  data,
  title,
  type,
  cancelOnClick,
}: UserFormProps) => {
  const defaultData = {
    id: '',
    name: '',
    email: '',
    phone: '',
  };
  const dispatch = useDispatch();

  const handleSubmit = (user: UserType, { resetForm }: { resetForm: () => void }) => {
    if (type === 'add') {
      dispatch(addUser({ ...user, id: generateNanoId(5) }));
    } else {
      dispatch(editUser(user));
    }

    resetForm();
    cancelOnClick();
  }

  return (
    <Formik
      initialValues={data || defaultData}
      validationSchema={SCHEMA_USERS}
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
              name="name"
              type="text"
              label="Fullname"
              placeholder="Fullname"
            />
          </div>
          <div className="col-12 col-md-6">
            <FieldText
              id="email"
              name="email"
              type="email"
              label="Email"
              placeholder="Email"
            />
          </div>
          <div className="col-12 col-md-6">
            <FieldText
              id="phone"
              name="phone"
              type="tel"
              label="Phone Number"
              placeholder="Phone Number"
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
