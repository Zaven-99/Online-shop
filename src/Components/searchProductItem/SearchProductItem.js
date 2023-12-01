import React, { useState } from "react";
import styles from "../../Components/styles/productItem.module.css";
import { NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart/cart-slices";
import { favoriteActions } from "../../store/favourite/favourites-slice";

import notfavourite from "../../Images/icons/notfavourite.png";
import favourite from "../../Images/icons/favourite.png";

const ProductItem = ({ product }) => {
  const dispatchAction = useDispatch();

  const [isFavourite, setIsFavourite] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const addItemHandler = () => {
    dispatchAction(
      cartActions.addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        rating:product.rating
      })
    );
    setIsAddedToCart(true);
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 100);
  };

  const addToFavoriteHandler = () => {
    dispatchAction(
      favoriteActions.addToFavorite({
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        rating: product.rating
      })
    );
    setIsFavourite(!isFavourite);
  };

  const removeFromFavoriteHandler = () => {
    dispatchAction(favoriteActions.removeFromFavorite(product.id));
    setIsFavourite(!isFavourite);
  };

  return (
    <div className={styles.card} key={product.id}>
      <div className={styles["card-inner"]}>
        <img
          className={styles["productImg"]}
          src={product.thumbnail}
          alt={`Thumbnail for ${product.title}`}
        />
        <div className={styles.cardTitle}>{product.title}</div>
        <div className={styles.cardPrice}>{product.price}$</div>
        <NavLink className={styles.cardRaiting}>
          <span>{product.rating}</span>
        </NavLink>
        <div className={styles["addToCart-or-addTofavourite"]}>
          <button
            className={`${styles.addToCart} ${
              isAddedToCart ? styles.addedToCart : ""
            }  `}
            onClick={addItemHandler}
          >
            Купить
          </button>
          <div className={styles.addTofavourite}>
            {isFavourite ? (
              <button onClick={removeFromFavoriteHandler}>
                <img className={styles.favourite} src={favourite} alt="" />
              </button>
            ) : (
              <button onClick={addToFavoriteHandler}>
                <img className={styles.favourite} src={notfavourite} alt="" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
