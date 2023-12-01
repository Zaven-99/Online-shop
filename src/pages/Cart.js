import React from "react";
import styles from "../Components/styles/cart.module.css";
import { NavLink } from "react-router-dom";
import CartItem from "../Components/cartItem/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className={styles.cart}>
      {cartItems.length > 0 ? (
        <div>
          <ul>
            <li className={styles["cart-item"]}>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={{
                    id: item.id,
                    title: item.title,
                    quantity: item.quantity,
                    total: item.totalPrice,
                    price: item.price,
                    thumbnail: item.thumbnail,
                  }}
                />
              ))}
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <div className={styles.statusCart}>Пока пусто</div>

          <p className={styles.messageText}>
            Воспользуйтесь <NavLink>каталогом</NavLink> или поиском
            <br /> Если у вас были товары в корзине – <NavLink>
              войдите
            </NavLink>{" "}
            в профиль
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
