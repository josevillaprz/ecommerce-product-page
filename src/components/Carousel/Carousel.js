import { useState } from "react";
import { imgData } from "../../util/imgData";
import { MdOutlineNavigateNext as Next } from "react-icons/md";
import { MdNavigateBefore as Back } from "react-icons/md";

import styles from "./Carousel.module.css";

export default function Carousel() {
  const [count, setCount] = useState(0);

  const decrease = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  const increase = () => {
    if (count >= 3) return;
    setCount(count + 1);
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${imgData[count].img})` }}
    >
      <button className={styles.btn} onClick={() => decrease()}>
        <Back size={"26px"} style={{ color: "#000" }} />
      </button>
      <button className={styles.btn} onClick={() => increase()}>
        <Next size={"26px"} style={{ color: "#000" }} />
      </button>
    </div>
  );
}
