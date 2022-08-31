import styles from "./AddBtn.module.css";
import { ImMinus } from "react-icons/im";
import { ImPlus } from "react-icons/im";

export default function AddBtn({ quantity, increaseHandler, decreaseHandler }) {
  return (
    <div className={styles.container}>
      <button onClick={() => decreaseHandler()} className={styles.btn}>
        <ImMinus />
      </button>
      <p className={styles.value}>{quantity}</p>
      <button onClick={() => increaseHandler()} className={styles.btn}>
        <ImPlus />
      </button>
    </div>
  );
}
