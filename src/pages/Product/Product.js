import { useState } from "react";
import AddBtn from "../../components/AddBtn/AddBtn";
import Navbar from "../../components/Navbar/Navbar";

export default function Product() {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});

  // SHOE DATA - this data would be requested from the server in a real application.
  const data = [
    {
      id: "e30d2648-974c-459e-bcbb-c529313b8c68",
      brand: "sneaker company",
      name: "fall limited edition sneakers",
      description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
      price: 125,
      previousPrice: 250,
      salePercentage: 50,
    },
  ];

  const decrease = () => {
    if (quantity === 1) return 1;
    const value = quantity - 1;
    setQuantity(value);
  };

  const increase = () => {
    const value = quantity + 1;
    setQuantity(value);
  };

  const addToCart = (itemId) => {
    // const
    setProduct({
      id: itemId,
      qty: quantity,
    });
  };

  return (
    <>
      <Navbar product={product} />
      <main>
        <div>carousel</div>
        <div>
          <p>{data[0].brand}</p>
          <h1>{data[0].name}</h1>
          <p>{data[0].description}</p>
          <div>
            <h2>{data[0].price}</h2>
            <p>{data[0].salePercentage}%</p>
          </div>
          <div>
            <AddBtn
              quantity={quantity}
              increaseHandler={increase}
              decreaseHandler={decrease}
            />
            <button onClick={() => addToCart(data[0].id)}>add to cart</button>
          </div>
        </div>
      </main>
    </>
  );
}
