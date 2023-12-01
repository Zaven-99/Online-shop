import React from "react";
import styles from "../styles/modalForBuyers.module.css";

import { NavLink } from "react-router-dom";

const ModalForBuyers = () => {
  return (
    <div className={styles.modalForBuyers}>
      <ul>
        <li>
          <NavLink>Доставка</NavLink>
        </li>
        <li>
          <NavLink>Бонусная программа </NavLink>
        </li>
        <li>
          <NavLink>Узнать статус заказа </NavLink>
        </li>
        <li>
          <NavLink>Обмен, возврат, гарантия</NavLink>
        </li>
        <li>
          <NavLink>Кредиты </NavLink>
        </li>
        <li>
          <NavLink>Сервисные центры </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ModalForBuyers;
