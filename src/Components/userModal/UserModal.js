import React from "react";
import styles from "../styles/userModal.module.css";
import "../styles/transition.css";

import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const UserModal = ({ setIsLoginModal, setIsUserModal ,userModal }) => {
  return (
    <div className={styles.userModal}>
      <CSSTransition
          in={userModal}
          classNames={{
            enter: "alert-enter",
            enterActive: "alert-enter-active",
            exit: "alert-exit",
            exitActive: "alert-exit-active",
          }}
          timeout={300}
          unmountOnExit
        > 
        <div>
      <span onClick={() => setIsUserModal(false)}>✖</span>
      <h1 className={styles.title}>
        Получайте бонусы, сохраняйте и отслеживайте заказы
      </h1>
      <button
        onClick={() => {
          setIsLoginModal(true);
          setIsUserModal(false);
        }}
        className={styles.logIn}
      >
        Войти
      </button>
      <ul>
        <li>
          <NavLink to="/">Узнать статус заказа</NavLink>
        </li>
        <li>
          <NavLink to="/">Обратная связь</NavLink>
        </li>
        <li>
          <NavLink to="/">Обмен, возврат, гарантия</NavLink>
        </li>
      </ul>
      </div>
      </CSSTransition>
    </div>
  );
};

export default UserModal;
