import Layout from '../Layout';
import Logo from './Logo';
import Heading from './Heading';
import Search from './Search';
import Auth from './Auth';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Layout>
        <div className={styles.gridContainer}>
          <Logo />
          <Heading text='Главная' />
          <Search />
          <Auth auth='Макс' />
        </div>
      </Layout>
    </header>
  );
};
