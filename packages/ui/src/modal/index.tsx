import styles from './modal.module.css';
import classNamesBind from 'classnames/bind';

type ModalProps = {
  show: boolean;
  children: React.ReactNode;
};

const cx = classNamesBind.bind(styles);

export const Modal = ({ show = false, children }: ModalProps) => {
  return (
    <div className={cx([styles.wrapper], {
      wrapper_show: show,
    })}>
      <div className={cx([styles.container], {
        container_show: show,
      })}>
        {children}
      </div>
    </div>
  );
}
