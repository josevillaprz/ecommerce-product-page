import { useState } from "react";
import AddBtn from "../../components/AddBtn/AddBtn";
import Btn from "../../components/Btn/Btn";
import Carousel from "../../components/Carousel/Carousel";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Product.module.css";
import img from "../../images/image-product-1-thumbnail.jpg";

export default function Product() {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState([]);

  // SHOE DATA - this data would be requested from the server in a real application.
  const data = [
    {
      id: "e30d2648-974c-459e-bcbb-c529313b8c68",
      brand: "sneaker company",
      name: "Fall Limited Edition Sneakers",
      description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
      price: 125,
      previousPrice: 250,
      salePercentage: 50,
      image: img,
    },
  ];

  const decrease = () => {
    if (quantity === 1) return;
    const value = quantity - 1;
    setQuantity(value);
  };

  const increase = () => {
    const value = quantity + 1;
    setQuantity(value);
  };

  const addToCart = () => {
    // const
    setProduct({
      id: data[0].id,
      name: data[0].name,
      price: data[0].price,
      image: data[0].image,
      qty: quantity,
    });
  };

  return (
    <>
      <Navbar product={product} />
      <main className={styles.container}>
        <section className={styles.carouselContainer}>
          <Carousel />
        </section>
        <section className={styles.detailsContainer}>
          <p className={styles.subHeading}>{data[0].brand}</p>
          <h1 className={styles.heading}>{data[0].name}</h1>
          <p className={styles.text}>{data[0].description}</p>
          <div className={styles.priceContainer}>
            <p className={styles.price}>${data[0].price.toFixed(2)}</p>
            <p className={styles.discount}>{data[0].salePercentage}%</p>
            <s className={styles.slashed}>
              ${data[0].previousPrice.toFixed(2)}
            </s>
          </div>
          <div className={styles.btnGroup}>
            <AddBtn
              quantity={quantity}
              increaseHandler={increase}
              decreaseHandler={decrease}
            />
            <Btn text="Add to cart" handler={addToCart} />
          </div>
        </section>
      </main>
    </>
  );
}
