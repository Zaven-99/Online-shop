import React from "react";
import styles from "../styles/favouriteItem.module.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart/cart-slices.js";
import { favoriteActions } from "../../store/favourite/favourites-slice";
import { useState } from "react";

import favourite from "../../Images/icons/favourite.png";
import notfavourite from "../../Images/icons/notfavourite.png";

import { NavLink } from "react-router-dom";

const FavouriteItem = (props) => {
  const dispatchAction = useDispatch();

  const { id, title, quantity, price, thumbnail, rating } = props.item;

  const [isFavourite, setIsFavourite] = useState(true);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const addItemHandler = () => {
    dispatchAction(
      cartActions.addItem({
        id,
        title,
        price,
        quantity,
        thumbnail,
        rating,
      })
    );
  };

  const removeFromFavoriteHandler = () => {
    setTimeout(() => {
      dispatchAction(favoriteActions.removeFromFavorite(id));
    }, 300);
    setIsFavourite(false);
  };

  return (
    <div className={styles.card} key={id}>
      <div className={styles["card-inner"]}>
        <img
          className={styles["productImg"]}
          src={thumbnail}
          alt={`Thumbnail for ${title}`}
        />
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardPrice}>{price}$</div>
        <NavLink className={styles.cardRaiting}>
          <span>{rating}</span>
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
              <button>
                <img className={styles.favourite} src={notfavourite} alt="" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouriteItem;
