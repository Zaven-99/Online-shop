import React, { useState, useRef } from "react";
import styles from "../styles/loginModal.module.css";
import "../styles/transition.css";

import InfoModal from "../infoModal/InfoModal";

import question from "../../Images/icons/question.png";
import key from "../../Images/icons/key.png";

import { CSSTransition } from "react-transition-group";

import { NavLink } from "react-router-dom";

import useClickOutside from "../../utils/useClickOutside";

const LoginModal = ({ setIsLoginModal, setIsUserModal }) => {
  const [inputActive, setInputActive] = useState(false);
  const [infoModal, setInfoModal] = useState(false);

  const infoRef = useRef(null);

  useClickOutside(infoRef, () => {
    setInfoModal(false);
  });

  const clickInInput = () => {
    setInputActive(true);
  };
  const clickInForm = () => {
    setInputActive(false);
  };

  return (
    <div>
      <div
        onClick={() => {
          setIsLoginModal(false);
          setIsUserModal(false);
        }}
        className={styles.backdrop}
      ></div>
      <form className={styles.loginModal}>
        <p>Войти или зарегистрироваться</p>
        <div
          ref={infoRef}
          className={
            inputActive
              ? `${styles.inputSection} ${styles.active}`
              : styles.inputSection
          }
        >
          <input
            onFocus={clickInInput}
            onBlur={clickInForm}
            type="text"
            id="input"
            autoComplete="off"
          />
          <label htmlFor="input">Телефон или e-mail</label>
          <div onClick={() => setInfoModal(!infoModal)} className={styles.info}>
            <img src={question} alt="" />
          </div>
        </div>
        <div className={styles.signInBtn}>
          <button>Получить код</button>
        </div>
        <div className={styles.anotherWaylogin}>
          <span>Другие способы входа:</span>
        </div>
        <div className={styles.logInBtn}>
          <div className={styles.key}>
            <img src={key} alt="" />
          </div>

          <button>Войти с паролем</button>
        </div>
        <div className={styles.rights}>
          Нажимая кнопку "Получить код", Вы соглашаетесь c условиями
          <NavLink>политики конфиденциальности</NavLink>
        </div>
        <CSSTransition
          in={infoModal}
          classNames={{
            enter: "alert-enter",
            enterActive: "alert-enter-active",
            exit: "alert-exit",
            exitActive: "alert-exit-active",
          }}
          timeout={300}
          unmountOnExit
        >
          <InfoModal setInfoModal={setInfoModal} />
        </CSSTransition>
      </form>
    </div>
  );
};

export default LoginModal;
