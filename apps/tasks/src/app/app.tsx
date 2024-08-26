/* eslint-disable react-hooks/exhaustive-deps */
import styles from './app.module.css';
import { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ColumnDef } from '@tanstack/react-table';

import { selectTasks, deleteTask } from '@st-fly/hooks';
import { TaskType } from '@st-fly/types';
import {
  Button,
  TaskForm,
  Modal,
  ScreenLoading,
  TableBasic,
} from '@st-fly/ui';

export function App() {
  const dispatch = useDispatch();
  const { loading, items: tasks } = useSelector(selectTasks);

  const [taskData, setTaskData] = useState<TaskType>();
  const [showAddTask, isShowAddTask] = useState(false);
  const toggleShowAddTask = () => isShowAddTask(!showAddTask);

  const [showEditTask, isShowEditTask] = useState(false);
  const toggleShowEditTask = () => isShowEditTask(!showEditTask);

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask(id));
  };

  const columns = useMemo<ColumnDef<TaskType>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Task',
        cell: ({ row }) => (
          <Link to={`task/${row.original.id}`}>
            {row.original.name}
          </Link>
        ),
      },
      {
        accessorKey: 'description',
        header: 'Description',
        cell: ({ row }) => (
          <pre>
            {row.original.description.substring(0, 100)} ...
          </pre>
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
              onClick={() => {
                setTaskData(row.original);
                toggleShowEditTask();
              }}
            >
              Edit <i className="icon-Atom_Icon-edit-list" />
            </Button>
            <Button
              type="button"
              theme="reset"
              onClick={() => handleDeleteTask(row.original.id)}
            >
              Delete <i className="icon-Atom_Icon-Trash" />
            </Button>
          </div>
        ),
      },
    ],
    []
  );

  const renderTasks = () => {
    if (loading) {
      return <ScreenLoading />;
    }

    if (tasks.length === 0) {
      return (
        <h4 className={styles.empty}>
          <i className="icon-Atom_Icon-Alert" /> No tasks found
        </h4>
      );
    }

    return <TableBasic columns={columns} data={tasks} />;
  }

  return (
    <>
      <section className={styles.wrapper}>
        <nav className={styles.navigation}>
          <h2 className="title-section">
            Tasks <i className="icon-Atom_Icon-User-fill" />
          </h2>
          <Button type="button" theme="warning" onClick={toggleShowAddTask}>
            Create New Task <i className="icon-Atom_Icon-plus" />
          </Button>
        </nav>
        <section className={styles.container}>
          {renderTasks()}
        </section>
      </section>
      <Modal show={showAddTask}>
        <TaskForm
          key="add-task"
          title="Create New Task"
          type="add"
          cancelOnClick={toggleShowAddTask}
        />
      </Modal>
      <Modal show={showEditTask}>
        <TaskForm
          key="edit-task"
          data={taskData}
          title="Edit Task"
          type="edit"
          cancelOnClick={toggleShowEditTask}
        />
      </Modal>
    </>
  );
}

export default App;
