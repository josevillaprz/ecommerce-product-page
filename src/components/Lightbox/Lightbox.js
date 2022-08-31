import { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./Lightbox.module.css";

const Lightbox = ({ images, toggleModal, showModal }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const clickHandler = (img, i) => {
    setCurrentImg(i);
  };

  return (
    <div className={styles.container}>
      {showModal && <Modal toggleModal={toggleModal} images={images} />}
      <img
        src={images[currentImg].img}
        alt="product"
        onClick={() => toggleModal()}
      />
      <div className={styles.thumbnailContainer}>
        {images.map((img, i) => (
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
