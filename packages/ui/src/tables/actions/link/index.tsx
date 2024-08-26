import styles from './link.module.css';
import { Link, To } from 'react-router-dom';
import classNames from 'classnames';

type TableActionLinkProps = {
  to: To;
  children: React.ReactNode;
  className?: string;
}

export function TableActionLink({ to, children, className }: TableActionLinkProps) {
  return (
    <Link to={to} className={classNames([styles.link, className])}>
      {children}
    </Link>
  );
}
