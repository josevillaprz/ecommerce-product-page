import styles from "./Btn.module.css";

export default function Btn({ text, handler }) {
  return (
    <button onClick={() => handler()} className={styles.container}>
      {text}
    </button>
  );
}
