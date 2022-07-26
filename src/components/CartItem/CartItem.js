import { FaTrashAlt } from "react-icons/fa";
import styles from "./CartItem.module.css";

const CartItem = ({ product }) => {
  const calcPrice = (a, b) => {
    const value = a * b;
    return value.toFixed(2);
  };

  return (
    <div href="/" className={styles.container}>
      <img src={product.image} alt="product" className={styles.img} />
      <div className={styles.textContainer}>
        <a href="/" className={styles.link}>
          <p>{product.name}</p>
        </a>
        <p>
          ${product.price.toFixed(2)} x {product.qty}{" "}
          <span className={styles.boldText}>
            ${calcPrice(product.price, product.qty)}
          </span>
        </p>
      </div>
      <button className={styles.button}>
        <FaTrashAlt size={"20px"} />
      </button>
    </div>
  );
};

export default CartItem;
