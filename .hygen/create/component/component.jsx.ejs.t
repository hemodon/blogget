---
to: <%= fullPath %>/<%= component_name %>.jsx
---
import styles from './<%= component_name %>.module.css';

export const <%= component_name %> = (props) => {
  return <div className={styles.container}></div>
}