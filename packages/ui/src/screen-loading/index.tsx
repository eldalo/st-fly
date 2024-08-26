import styles from './loading.module.css';

export const ScreenLoading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner} />
    </div>
  );
}
