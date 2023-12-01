// favourites.js
import React from "react";
import { useSelector } from "react-redux";
import FavouriteItem from "../Components/favouriteItem/FavouriteItem";
import styles from "../Components/styles/favouritePage.module.css";

const FavouritesPage = () => {
  const favoriteItems = useSelector((state) => state.favorite.favoriteItems);

  return (
    <div className={styles.card}>
      <div className={styles["card-inner"]}>
        {favoriteItems.map((item) => (
          <FavouriteItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
              thumbnail: item.thumbnail,
              rating:item.rating,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FavouritesPage;
