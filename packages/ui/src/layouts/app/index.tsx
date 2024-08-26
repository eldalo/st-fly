import styles from './layout.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';
import classNames from 'classnames';

export const LayoutApp = () => {
  return (
    <>
      <header className={styles.header_wrapper}>
        <div className={classNames('container', [styles.header_container])}>
          <h1 className={styles.title}>
            <i className="icon-Atom_Icon-Idea" />
            Smart Talent Fly
          </h1>
          <nav className={styles.navigation}>
            <NavLink to="/app" className={styles.link}>
              Users <i className="icon-Atom_Icon-User-fill" />
            </NavLink>
            <NavLink to="/app/tasks" className={styles.link}>
              Tasks <i className="icon-Atom_Icon-Dropdown" />
            </NavLink>
            <NavLink to="/app/reports" className={styles.link}>
              Reports <i className="icon-Atom_Icon-Filters" />
            </NavLink>
          </nav>
        </div>
      </header>
      <main className={styles.main_wrapper}>
        <section className={classNames('container', [styles.main_container])}>
          <Toaster
            richColors
            closeButton
            icons={{
              success: <i className="icon-Atom_Icon-Circular-done" />,
              error: <i className="icon-Atom_Icon-Alert" />,
              warning: <i className="icon-Atom_Icon-Warning" />,
            }}
          />
          <Outlet />
        </section>
      </main>
    </>
  );
}
