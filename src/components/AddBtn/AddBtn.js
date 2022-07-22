export default function AddBtn({ quantity, increaseHandler, decreaseHandler }) {
  return (
    <div>
      <button onClick={() => decreaseHandler()}>-</button>
      <p>{quantity}</p>
      <button onClick={() => increaseHandler()}>+</button>
    </div>
  );
}
