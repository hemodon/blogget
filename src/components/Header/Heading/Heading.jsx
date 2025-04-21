import styles from './Heading.module.css';

export const Heading = ({text}) => {
  return <h1 className={styles.heading}>{text}</h1>
}