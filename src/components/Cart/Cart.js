import Btn from "../Btn/Btn";
import CartItem from "../CartItem/CartItem";
import styles from "./Cart.module.css";

export default function Cart({ product }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Cart</p>
      <div className={styles.itemsContainer}>
        {product.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <CartItem product={product} />
            <Btn text="Checkout" />
          </>
        )}
      </div>
    </div>
  );
}
