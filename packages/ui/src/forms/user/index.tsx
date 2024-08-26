import styles from '../form.module.css';
import { useForm } from 'react-hook-form';

import { SCHEMA_USERS } from '@st-fly/shared';
import { UserType } from '@st-fly/types';
import { Button, FieldText } from '@st-fly/ui';

type UserFormProps = {
  data: UserType | undefined;
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
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    control,
  } = useForm({
    defaultValues: data,
    resolver: SCHEMA_USERS,
  });
  console.log({ errors });
  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit((user) => buttonSaveOnClick(user))}
    >
      <h3 className={styles.title}>{title}</h3>
      <div className="row">
        <div className="col-12">
          <FieldText
            id="name"
            name='name'
            type="text"
            label='Fullname'
            placeholder="Fullname"
            register={register}
            error={errors}
          />
        </div>
        <div className="col-12 col-md-6">
          <FieldText
            id="email"
            name='email'
            type="email"
            label='Email'
            placeholder="Email"
            register={register}
            error={errors}
          />
        </div>
        <div className="col-12 col-md-6">
          <FieldText
            id="phone"
            name='phone'
            type="tel"
            label='Phone Number'
            placeholder="Phone Number"
            register={register}
            error={errors}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-5">
          <Button
            type="submit"
            theme="success"
            width="width_100"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Saving...' : 'Save'} <i className="icon-Atom_Icon-Correct" />
          </Button>

        </div>
        <div className="col-12 col-md-5">
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
    </form >
  );
}
