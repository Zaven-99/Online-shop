import React from "react";
import styles from "../styles/header.module.css";


import { NavLink } from "react-router-dom";

import { useState ,useRef } from "react";

import { CSSTransition } from "react-transition-group";

import useClickOutside from "../../utils/useClickOutside";

import arrowDown from "../../Images/icons/arrowDown.png";
import arrowUp from "../../Images/icons/arrow-up.png";
import ModalForBuyers from "../modalForBuyers/ModalForBuyers";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [changeArrow, setChangeArrow] = useState(false);

  const toggleArrow = () => {
    setChangeArrow(!changeArrow);
  };

  const toggleModalWindow = () => {
    setShowModal(!showModal);
    toggleArrow();
  };

  const activeLink = `${styles.menunavigationItem} ${styles.active}`;
  const normalLink = `${styles.menunavigationItem}`;

  const menuRef = useRef(null);

  useClickOutside(menuRef, () => {
    setShowModal(false);
  });

  return (
    <div className={styles.header} ref={menuRef}>
      <div>
        <ul>
          <li className={styles.nameOfShop}>
            <strong>
              <NavLink className={styles.nameOfShop} to="/">
                Online store
              </NavLink>
            </strong>
          </li>
        </ul>
      </div>
      <div className={styles.menu}>
        <ul className={styles.menuNavigation}>
          <li>
            <NavLink
              to="/stock"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Акции
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shops"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Магазины
            </NavLink>
          </li>
          <li className={styles.forBuyersLi}>
            <button
              onClick={toggleModalWindow}
              className={`${styles.forbuyers} ${styles.menunavigationItem}`}
            >
              Покупателям
              {!changeArrow && (
                <img className={styles.arrowDown} src={arrowDown} alt="" />
              )}
              {changeArrow && (
                <img className={styles.arrowDown} src={arrowUp} alt="" />
              )}
            </button>
            <CSSTransition
              in={showModal}
              classNames={{
                enter: "alert-enter",
                enterActive: "alert-enter-active",
                exit: "alert-exit",
                exitActive: "alert-exit-active",
              }}
              timeout={300}
              unmountOnExit
            >
              <ModalForBuyers />
            </CSSTransition>
          </li>
          <li>
            <NavLink
              to="/forLegalEntities"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Юридическим лицам
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/vacancies"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Вакансии
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
