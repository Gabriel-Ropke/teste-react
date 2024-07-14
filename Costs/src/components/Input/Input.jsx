import styles from "./Input.module.css";

export function Input({ type, text, name, handleOnChange, value }) {
  return (
    <div className={styles.inputContainer}>
      <input type={type} id={name} value={value} onChange={handleOnChange} />
      <label htmlFor={name} className={value ? styles.activeLabel : ""}>
        {text}
      </label>
    </div>
  );
}
