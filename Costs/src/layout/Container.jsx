import { customClass } from "../assets/functions.js";
import styles from "./Container.module.css";
export function Container(props) {
  return (
    <div
      className={`${styles.container} ${customClass(
        styles,
        props.customClass
      )}`}
    >
      {props.children}
    </div>
  );
}
