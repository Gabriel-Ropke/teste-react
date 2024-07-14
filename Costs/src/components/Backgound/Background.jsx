import styles from "./Background.module.css";
export function Background(props) {
  return (
    <div className={styles.backgroundContainer}>
      <img src={props.file} alt="" />
      <div className={styles.shadow}></div>
    </div>
  );
}
