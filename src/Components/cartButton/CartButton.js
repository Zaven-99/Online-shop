import React from "react";
import styles from "../styles/headerBottom.module.css";

import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { mainActions } from "../../store/cart/main-slice.js";

import cart from "../../Images/icons/cart.png";

import CartItem from "../cartItem/CartItem";

const CartButton = () => {
  const itemsQuantity = useSelector((state) => state.cart.itemsQuantity);
  const dispatchFunc = useDispatch();
  const isCartVisible = useSelector((state) => state.main.isCartVisible);
  const cartItems = useSelector((state) => state.cart.items);

  const togglecartModal = () => {
    dispatchFunc(mainActions.toggleCartVisibility());
  };

  return (
    <div className={styles.cart}>
      <button className={styles["cart-button"]} onClick={togglecartModal}>
        <img src={cart} alt="" />
        <div className={styles.productsCount}>{itemsQuantity}</div>
      </button>
      {isCartVisible && (
        <div className={styles.cartContent}>
          <span onClick={togglecartModal} className={styles["close-modal"]}>
            ✕
          </span>
          {itemsQuantity > 0 ? (
            <div>
              <ul>
                <li>
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
            <div>Пока пусто</div>
          )}

          <NavLink to="/cart">Перейти в корзину</NavLink>
        </div>
      )}
    </div>
  );
};

export default CartButton;
