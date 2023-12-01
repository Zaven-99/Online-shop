import React, { useState } from "react";
import styles from "../../Components/styles/productItem.module.css";
import { NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart/cart-slices";
import { favoriteActions } from "../../store/favourite/favourites-slice";

import notfavourite from "../../Images/icons/notfavourite.png";
import favourite from "../../Images/icons/favourite.png";

const ProductItem = ({ title, price, id, thumbnail, rating }) => {
  const dispatchAction = useDispatch();

  const [isFavourite, setIsFavourite] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const addItemHandler = () => {
    dispatchAction(
      cartActions.addItem({
        id: id,
        title: title,
        price: price,
        thumbnail: thumbnail,
      })
    );
    setIsAddedToCart(true);
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 100);
  };

  const addToFavoriteHandler = () => {
    dispatchAction(
      favoriteActions.addToFavorite({ id, title, price, thumbnail, rating })
    );
    setIsFavourite(!isFavourite);
  };

  const removeFromFavoriteHandler = () => {
    dispatchAction(favoriteActions.removeFromFavorite(id));
    setIsFavourite(!isFavourite);
  };

  return (
    <div className={styles.card} key={id}>
      <div className={styles["card-inner"]}>
        <NavLink to={`/product/${id}`}>
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
