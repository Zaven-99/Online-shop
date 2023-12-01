import React from "react";
import styles from "../styles/footer.module.css";

import { NavLink } from "react-router-dom";

import { footerFirstBlockLinks } from "../../helper/API";
import { footerSecondBlockLinks } from "../../helper/API";
import { footerThirdBlockLinks } from "../../helper/API";

import GooglePlay from "../../Images/appStore/googlePlay";
import AppGallery from "../../Images/appStore/AppGallery";
import RuStore from "../../Images/appStore/RuStore";
import AppStore from "../../Images/appStore/AppStore";

const Footer = () => {
  const phoneNumber = "+7 (000)-000-00-00";

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerNavMenu}>
        <div className={styles.footerFirstBlock}>
          <h6 className={styles.title}>
            Компания
            <hr />
          </h6>
          <ul>
            {footerFirstBlockLinks.map((item, key) => (
              <NavLink key={key}>
                <li className={styles.itemLink}>{item.link}</li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className={styles.footerSecondBlock}>
          <h6 className={styles.title}>
            Покупателям
            <hr />
          </h6>
          <ul>
            <div>
              {footerSecondBlockLinks.map((item, key) => (
                <NavLink key={key}>
                  <li className={styles.itemLink}>{item.link}</li>
                </NavLink>
              ))}
            </div>
            <div>
              {footerThirdBlockLinks.map((item, key) => (
                <NavLink key={key}>
                  <li className={styles.itemLink}>{item.link}</li>
                </NavLink>
              ))}
            </div>
          </ul>
        </div>

        <div className={styles.footerForthBlock}>
          <h6 className={styles.title}>
            Оставайтесь на связи
            <hr />
          </h6>
          <ul>
            <div className={styles.call}>
              <div>
                <NavLink to={`tel:${phoneNumber}`} onClick={handleCallClick}>
                  <li className={styles.itemLink}> {phoneNumber} </li>
                </NavLink>
              </div>
              <div className={styles.workTime}>(c 03:00 до 22:00)</div>
            </div>
            <NavLink>
              <li className={styles.itemLink}>Адреса магазинов в г. Москва</li>
            </NavLink>
            <div>
              <NavLink>
                <li className={styles.appStore}>
                  <GooglePlay />
                </li>
              </NavLink>
              <NavLink>
                <li className={styles.appStore}>
                  <AppGallery />
                </li>
              </NavLink>
              <NavLink>
                <li className={styles.appStore}>
                  <RuStore />
                </li>
              </NavLink>
              <NavLink>
                <li className={styles.appleStore}>
                  <AppStore />
                </li>
              </NavLink>
            </div>
          </ul>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.rights}>
        © 2002–2023 Компания Online store. Администрация Сайта не несет
        ответственности за размещаемые Пользователями материалы (в т.ч.
        информацию и изображения), их содержание и качество.
      </div>
    </div>
  );
};

export default Footer;
