import styles from './button.module.css';
import ImgGoogle from './google.svg';

type GoogleButtonProps = {
  onClick: () => void;
  disabled?: boolean;
}

export function GoogleButton({ onClick, disabled = false }: GoogleButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={styles.base}
    >
      <img
        src={ImgGoogle}
        alt="Google"
        className={styles.image}
      />
      Login with SSO
    </button>
  );
}
