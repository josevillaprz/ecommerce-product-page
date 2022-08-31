import styles from "./Modal.module.css";
import { CgClose } from "react-icons/cg";
import Lightbox from "../Lightbox/Lightbox";

const Modal = ({ toggleModal, images }) => {
  return (
    <div className={styles.container}>
      <div className={styles.modalContainer}>
        <CgClose
          size={"34px"}
          onClick={() => toggleModal()}
          className={styles.icon}
        />
        <Lightbox images={images} />
      </div>
    </div>
  );
};

export default Modal;
