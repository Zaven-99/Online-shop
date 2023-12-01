import React from "react";
import styles from "../styles/infoModal.module.css";



const InfoModal = () => {
  return (
    <div className={styles.infoModal}>
      <div className={styles.InfoValid}>Телефон в формате: 7 000 000 00 00 Формат e-mail: name@example.ru</div>
    </div>
  );
};

export default InfoModal;
