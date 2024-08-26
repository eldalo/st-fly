import styles from './sidebar.module.css';
import classNames from 'classnames';

type SidebarFloatingProps = {
  children: React.ReactNode;
}

export function SidebarFloating({ children }: SidebarFloatingProps) {
  return (
    <aside className={classNames('animation_fadeIn d-flex flex-column', [styles.wrapper])}>
      <div className={classNames('animation_fadeInRight d-flex flex-column', [styles.container])}>
        {children}
      </div>
    </aside>
  );
}
