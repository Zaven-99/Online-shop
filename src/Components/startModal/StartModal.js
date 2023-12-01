import React from "react";
import styles from "../styles/startModal.module.css";

const startModal = ({ closeModal }) => {
  return (
    <div className={styles.backdrop} onClick={closeModal}>
      <div className={styles["start-modal"]}>
        <div>
          <p>
            <strong>Внимание!</strong> Этот проект предназначен для учебных
            целей и использует фейковый API адрес. Он не предназначен для
            реального использования. Вся информация, отображаемая на этой
            странице, вымышлена и используется исключительно для демонстрации
            навыков разработки.
          </p>
          <p>
            <strong>Примечание:</strong> Этот проект не до конца
            разработан и содержит недоработки.
          </p>
        </div>
      </div>
    </div>
  );
};

export default startModal;
