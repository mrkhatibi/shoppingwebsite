import styles from "./Buttons.module.css";
function Buttons({ quantity, product, dispatch }) {
  const clickHandler = (product, type) => {
    dispatch({ type, payload: product });
  };
  return (
    <div className={styles.container}>
      {!quantity || quantity < 1 ? (
        <button onClick={() => clickHandler(product, "Add")}>Add</button>
      ) : null}
      {quantity === 1 ? (
        <>
          <button onClick={() => clickHandler(product, "Increase")}>+</button>
          <p>{quantity}</p>
          <button onClick={() => clickHandler(product, "Remove")}>
            Delete
          </button>
        </>
      ) : null}
      {quantity > 1 ? (
        <>
          <button onClick={() => clickHandler(product, "Increase")}>+</button>
          <p>{quantity}</p>
          <button onClick={() => clickHandler(product, "Decrease")}>-</button>
        </>
      ) : null}
    </div>
  );
}

export default Buttons;
