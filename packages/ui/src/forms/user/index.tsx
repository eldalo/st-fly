import styles from '../form.module.css';
import { Formik, Form } from 'formik';

import { SCHEMA_USERS } from '@st-fly/shared';
import { UserType } from '@st-fly/types';
import { Button, FieldText } from '@st-fly/ui';

type UserFormProps = {
  data: UserType;
  title: string;
  buttonSaveOnClick: (user: UserType) => void;
  buttonCancelOnClick: () => void;
};

export const UserForm = ({
  data,
  title,
  buttonSaveOnClick,
  buttonCancelOnClick,
}: UserFormProps) => {
  console.log({ data });
  return (
    <Formik
      initialValues={data}
      validationSchema={SCHEMA_USERS}
      onSubmit={(values) => buttonSaveOnClick(values)}
    >
      <Form className={styles.form}>
        <h3 className={styles.title}>{title}</h3>
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
              onClick={() => buttonCancelOnClick()}
            >
              Cancel <i className="icon-Atom_Icon-Close" />
            </Button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}
