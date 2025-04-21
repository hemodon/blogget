import styles from './Auth.module.css';
import login from './img/login.svg';

export const Auth = ({ auth }) => {
  return (
    <button className={styles.button}>
      {auth ? (
        auth
      ) : (
        <img className={styles.svg} src={login} alt="Авторизация" />
      )}
    </button>
  );
};
