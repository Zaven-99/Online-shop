import React from "react";
import { NavLink } from "react-router-dom";


import styles from "../styles/dynamicLinksPopUp.module.css";

const DynamicLinks = ({title , blocks}) => {
  return (
    <div className={styles.dynamicLinksPopUp}>
      <div>
        <div className={styles.dynamicLinksPopUpBlock}>
          <h1>{title}</h1>
          <div className={styles.dynamicLinksPopUpBlockInner}>
            {blocks.map((block, blockIndex) => (
              <div key={blockIndex} className={styles.dynamicLinksPopUpItem}>
                <ul>
                  {block.items.map((item, itemIndex) => (
                    <NavLink key={itemIndex}>
                      <li>{item.link}</li>
                    </NavLink>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicLinks;
