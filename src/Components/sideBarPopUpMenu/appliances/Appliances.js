import React from "react";

import DynamicLinks from "../DynamicLinks";
import { appliancesShowBlock } from "./../sideBarPopUpMenuAPI";

import styles from "../../styles/dynamicLinksPopUp.module.css";

const Appliances = () => {
  const blocks = appliancesShowBlock;
  const title = "Встраиваемая техника";

  return (
    <div className={styles.dynamicLinksPopUp}>
      <DynamicLinks blocks={blocks} title={title} />
    </div>
  );
};

export default Appliances;
