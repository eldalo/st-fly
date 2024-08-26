import styles from './app.module.css';
import { useCallback, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ColumnDef } from '@tanstack/react-table';

import {
  selectTasks,
  addTask,
  editTask,
  deleteTask
} from '@st-fly/hooks';
import { generateNanoId } from '@st-fly/shared';
import { TaskType } from '@st-fly/types';
import {
  Button,
  TaskForm,
  Modal,
  ScreenLoading,
  TableBasic,
} from '@st-fly/ui';

export function App() {
  const taskDefault: TaskType = {
    id: '',
    name: '',
    description: ''
  };
  const dispatch = useDispatch();
  const { loading, items: tasks } = useSelector(selectTasks);

  const [task, setTask] = useState(taskDefault);
  const [showAddTask, isShowAddTask] = useState(false);
  const toggleShowAddTask = () => isShowAddTask(!showAddTask);

  const [showEditTask, isShowEditTask] = useState(false);
  const toggleShowEditTask = useCallback(() => isShowEditTask(!showEditTask), [showEditTask]);

  const handleAddTask = (task: TaskType) => {
    dispatch(addTask({ ...task, id: generateNanoId(5) }));
    toggleShowAddTask();
  };

  const handleShowEditTask = useCallback((task: TaskType) => {
    setTask(task);
    toggleShowEditTask();
  }, [setTask, toggleShowEditTask]);

  const handleEditTask = (task: TaskType) => {
    dispatch(editTask(task));
  };

  const handleDeleteTask = useCallback((id: string) => {
    dispatch(deleteTask(id));
  }, [dispatch]);

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
              onClick={() => handleShowEditTask(row.original)}
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
    [handleDeleteTask, handleShowEditTask]
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
          data={taskDefault}
          title="Create New Task"
          buttonSaveOnClick={handleAddTask}
          buttonCancelOnClick={toggleShowAddTask}
        />
      </Modal>
      <Modal show={showEditTask}>
        <TaskForm
          data={task}
          title="Edit Task"
          buttonSaveOnClick={handleEditTask}
          buttonCancelOnClick={toggleShowEditTask}
        />
      </Modal>
    </>
  );
}

export default App;
