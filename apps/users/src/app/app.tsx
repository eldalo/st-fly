import styles from './app.module.css';
import { useCallback, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ColumnDef } from '@tanstack/react-table';

import {
  selectUsers,
  addUser,
  editUser,
  deleteUser
} from '@st-fly/hooks';
import { generateNanoId } from '@st-fly/shared';
import { UserType } from '@st-fly/types';
import {
  Button,
  UserForm,
  Modal,
  ScreenLoading,
  TableBasic,
} from '@st-fly/ui';

export function App() {
  const dispatch = useDispatch();
  const { loading, items: users } = useSelector(selectUsers);

  const [user, setUser] = useState<UserType>();
  const [showAddUser, isShowAddUser] = useState(false);
  const toggleShowAddUser = () => isShowAddUser(!showAddUser);

  const [showEditUser, isShowEditUser] = useState(false);
  const toggleShowEditUser = useCallback(() => isShowEditUser(!showEditUser), [showEditUser]);

  const handleAddUser = (user: UserType) => {
    dispatch(addUser({ ...user, id: generateNanoId(5) }));
    toggleShowAddUser();
  };

  const handleShowEditUser = useCallback((user: UserType) => {
    setUser(user);
    toggleShowEditUser();
  }, [setUser, toggleShowEditUser]);

  const handleEditUser = (user: UserType) => {
    dispatch(editUser(user));
    toggleShowEditUser();
  };

  const handleDeleteUser = useCallback((id: string) => {
    dispatch(deleteUser(id));
  }, [dispatch]);

  const columns = useMemo<ColumnDef<UserType>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Fullname',
        cell: ({ row }) => (
          <Link to={`user/${row.original.id}`}>
            {row.original.name}
          </Link>
        ),
      },
      {
        accessorKey: 'email',
        header: 'Email',
        cell: ({ row }) => (
          <a href={`mailto:${row.original.email}`} target='_blank' rel="noopener noreferrer">
            {row.original.email}
          </a>
        ),
      },
      {
        accessorKey: 'phone',
        header: 'Phone Number',
        cell: ({ row }) => (
          <a href={`tel:${row.original.phone}`} target='_blank' rel="noopener noreferrer">
            {row.original.phone}
          </a>
        ),
      },
      {
        accessorKey: '',
        header: 'Actions',
        cell: ({ row }) => (
          <div className="flex">
            <Button
              type="button"
              theme="reset"
              onClick={() => handleShowEditUser(row.original)}
            >
              Edit <i className="icon-Atom_Icon-edit-list" />
            </Button>
            <Button
              type="button"
              theme="reset"
              onClick={() => handleDeleteUser(row.original.id)}
            >
              Delete <i className="icon-Atom_Icon-Trash" />
            </Button>
          </div>
        ),
      },
    ],
    [handleDeleteUser, handleShowEditUser]
  );

  const renderUsers = () => {
    if (loading) {
      return <ScreenLoading />;
    }

    if (users.length === 0) {
      return (
        <h4 className={styles.empty}>
          <i className="icon-Atom_Icon-Alert" /> No users found
        </h4>
      );
    }

    return <TableBasic columns={columns} data={users} />;
  }

  return (
    <>
      <section className={styles.wrapper}>
        <nav className={styles.navigation}>
          <h2 className="title-section">
            Users <i className="icon-Atom_Icon-User-fill" />
          </h2>
          <Button type="button" theme="warning" onClick={toggleShowAddUser}>
            Create New User <i className="icon-Atom_Icon-plus" />
          </Button>
        </nav>
        <section className={styles.container}>
          {renderUsers()}
        </section>
      </section>
      <Modal show={showAddUser}>
        <UserForm
          data={user}
          title="Create New User"
          buttonSaveOnClick={handleAddUser}
          buttonCancelOnClick={toggleShowAddUser}
        />
      </Modal>
      <Modal show={showEditUser}>
        <UserForm
          data={user}
          title="Edit User"
          buttonSaveOnClick={handleEditUser}
          buttonCancelOnClick={toggleShowEditUser}
        />
      </Modal>
    </>
  );
}

export default App;
