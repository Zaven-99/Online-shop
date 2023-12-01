import styles from "../styles/cartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart/cart-slices.js";

const CartItem = (props) => {
  const dispatchAction = useDispatch();

  const { id, title, quantity, total, price, thumbnail } = props.item;

  const addItemHandler = () => {
    dispatchAction(
      cartActions.addItem({
        id,
        title,
        price,
        quantity,
        thumbnail,
      })
    );
  };

  const removeItemHandler = () => {
    dispatchAction(cartActions.removeItem(id));
  };

  return (
    <li className={styles.item}>
      <header>
        <h3>{title}</h3>
        <div className={styles.price}>
          ${total}{" "}
          <span className={styles["item-price"]}>(${price} / шт.)</span>
        </div>
      </header>

      <div className={styles.details}>
        <div className={styles.quantity}>
          x <span>{quantity}</span>
          <img className={styles["item-thumbnail"]} src={thumbnail} alt="" />
        </div>
        <div className={styles.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
