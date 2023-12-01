import React from "react";
import styles from "../styles/searchResult.module.css";

import { NavLink } from "react-router-dom";
const SearchResults = ({ item , id , }) => {
  return (
    <NavLink to = {`/product/${id}`} className={styles.searchResults}>
      <h3>Результаты поиска:</h3>
      <div className={styles.card} key={item.id}>
        <div className={styles.cardTitle}>
          <p>
            <strong>Название товара:</strong>
          </p>
          <span>{item.title}</span>
        </div>

        <div className={styles.cardPrice}>
          <p>
            <strong>Цена:</strong>
          </p>
          <span>{item.price}$</span>
        </div>
        <div>
          <img
            className={styles["productImg"]}
            src={item.thumbnail}
            alt={`Thumbnail for ${item.title}`}
          />
        </div>
      </div>
    </NavLink>
  );
};

export default SearchResults;
