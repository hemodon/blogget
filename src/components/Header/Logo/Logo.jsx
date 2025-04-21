import styles from './Logo.module.css';
import logo from './img/logo.svg';

export const Logo = () => {
  return (
    <a className={styles.link} href="/">
      <img className={styles.logo} src={logo} alt="логотип Blogget" />
    </a>
  );
};
