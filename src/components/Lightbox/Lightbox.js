import { useState } from "react";
import { imgData } from "../../util/imgData";
import styles from "./Lightbox.module.css";

const Lightbox = () => {
  const [currentImg, setCurrentImg] = useState(0);

  const clickHandler = (img, i) => {
    setCurrentImg(i);
  };

  return (
    <div className={styles.container}>
      <img src={imgData[currentImg].img} alt="product" />
      <div className={styles.thumbnailContainer}>
        {imgData.map((img, i) => (
          <img
            key={i}
            src={img.thumbnail}
            alt="product thumbnail"
            onClick={() => clickHandler(img, i)}
            className={currentImg === i ? styles.active : undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default Lightbox;
