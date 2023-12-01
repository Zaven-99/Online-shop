import React, { useState, useRef } from "react";
import styles from "../styles/headerBottom.module.css";
import "../styles/transition.css";

import favourite from "../../Images/icons/favourite.png";
import user from "../../Images/icons/user.png";

import CartButton from "../cartButton/CartButton";
import { fetchProducts } from "../../helper/API";
import { NavLink } from "react-router-dom";

import useClickOutside from "../../utils/useClickOutside";
import SearchResults from "../searchResult/SearchResult";
const HeaderBottom = ({ setIsUserModal }) => {
  const [products, setProducts] = useState([]);
  const [modalWorkTime, setModalWorkTime] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const showModalWorkTime = () => {
    setModalWorkTime(true);
  };
  const hideModalWorkTime = () => {
    setModalWorkTime(false);
  };

  const modalRef = useRef(null);

  useClickOutside(modalRef, () => {
    setIsUserModal(false);
  });


  const searchProduct = async (e) => {
    setSearchValue(e.target.value);

     if (e.target.value.trim() !== "") {
       try {
        const fetchedProducts = await fetchProducts();
        const filteredProducts = fetchedProducts.filter((product) =>
          product.title.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setProducts(filteredProducts);
       } catch (error) {
        console.error("Error fetching products:", error);
      }
    } else {
       setProducts([]);
    }
  };

  const closeSearchModal = () => {
    setProducts([]);
    setSearchValue('')
  }
  return (
    <div className={styles.filter} ref={modalRef}>
      <div
        onMouseLeave={hideModalWorkTime}
        onMouseEnter={showModalWorkTime}
        className={styles.contacts}
      >
        +7 (000)-000-00-00{" "}
      </div>
      {modalWorkTime && (
        <span className={styles.workTime}>с 03:00 до 22:00</span>
      )}
      <div className={styles.input}>
        <label htmlFor=""></label>
        <input
          type="search"
          name="search"
          placeholder="Поиск по сайту"
          value={searchValue}
          onChange={searchProduct}
        />
      </div>
      <div>
      {products.length > 0 && searchValue.trim() !== "" && (
        <div onClick = {closeSearchModal}>
          <SearchResults item={products[0]} id={products[0].id} />
        </div>
      )}
      </div>
      <div className={styles.iconsBlock}>
        <div className={styles.favourite}>
          <NavLink to="/favourite">
            <img src={favourite} alt="" />
          </NavLink>
        </div>
        <CartButton />
        <div className={styles.userLogin}>
          <button onClick={() => setIsUserModal(true)}>
            <img src={user} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
