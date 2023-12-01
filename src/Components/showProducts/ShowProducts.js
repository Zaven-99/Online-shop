import React from "react";
import { CSSTransition } from "react-transition-group";

import styles from "../styles/showProduct.module.css";

import Appliances from "../sideBarPopUpMenu/appliances/Appliances";
import BeautyAndHealth from "../sideBarPopUpMenu/beautyAndHealth/BeautyAndHealth";
import SmartPhoneAndPhotographicEquipment from "../sideBarPopUpMenu/smartPhoneAndPhotographicEquipment/SmartPhoneAndPhotographicEquipment";
import TvConsoleAudio from "../sideBarPopUpMenu/tvConsoleAudio/TvConsoleAudio";
import PcAndLaptops from "../sideBarPopUpMenu/pcAndLaptops/PcAndLaptops";
import OfficeAndFurniture from "../sideBarPopUpMenu/officeAndFurniture/OfficeAndFurniture";
import RecreationAndEntertainment from "../sideBarPopUpMenu/recreationAndEntertainment/RecreationAndEntertainment";
import ToolsAndConstruction from "../sideBarPopUpMenu/toolsAndConstruction/ToolsAndConstruction";

const ShowProducts = ({
  showAppliancesProducts,
  showBeautyAndHealth,
  showSmartphonesAndPhotographicEquipment,
  showTvConsoleAudio,
  showPcAndLaptops,
  showPcComponents,
  showOfficeAndFurniture,
  showRecreationAndEntertainment,
  showToolsAndConstruction,
}) => {
  return (
    <div>
      <CSSTransition
        in={showAppliancesProducts}
        classNames={{
          enter: "alert-enter",
          enterActive: "alert-enter-active",
          exit: "alert-exit",
          exitActive: "alert-exit-active",
        }}
        timeout={300}
        unmountOnExit
      >
        <div className={styles.showProduct}>
          <Appliances />
        </div>
      </CSSTransition>
      <CSSTransition
        in={showBeautyAndHealth}
        classNames={{
          enter: "alert-enter",
          enterActive: "alert-enter-active",
          exit: "alert-exit",
          exitActive: "alert-exit-active",
        }}
        timeout={300}
        unmountOnExit
      >
        <div className={styles.showProduct}>
          <BeautyAndHealth />
        </div>
      </CSSTransition>
      <CSSTransition
        in={showSmartphonesAndPhotographicEquipment}
        classNames={{
          enter: "alert-enter",
          enterActive: "alert-enter-active",
          exit: "alert-exit",
          exitActive: "alert-exit-active",
        }}
        timeout={300}
        unmountOnExit
      >
        <div className={styles.showProduct}>
          <SmartPhoneAndPhotographicEquipment />
        </div>
      </CSSTransition>
      <CSSTransition
        in={showTvConsoleAudio}
        classNames={{
          enter: "alert-enter",
          enterActive: "alert-enter-active",
          exit: "alert-exit",
          exitActive: "alert-exit-active",
        }}
        timeout={300}
        unmountOnExit
      >
        <div className={styles.showProduct}>
          <TvConsoleAudio />
        </div>
      </CSSTransition>
      <CSSTransition
        in={showPcAndLaptops}
        classNames={{
          enter: "alert-enter",
          enterActive: "alert-enter-active",
          exit: "alert-exit",
          exitActive: "alert-exit-active",
        }}
        timeout={300}
        unmountOnExit
      >
        <div className={styles.showProduct}>
          <PcAndLaptops />
        </div>
      </CSSTransition>
      <CSSTransition
        in={showPcComponents}
        classNames={{
          enter: "alert-enter",
          enterActive: "alert-enter-active",
          exit: "alert-exit",
          exitActive: "alert-exit-active",
        }}
        timeout={300}
        unmountOnExit
      >
        <div className={styles.showProduct}>
          <PcAndLaptops />
        </div>
      </CSSTransition>
      <CSSTransition
        in={showOfficeAndFurniture}
        classNames={{
          enter: "alert-enter",
          enterActive: "alert-enter-active",
          exit: "alert-exit",
          exitActive: "alert-exit-active",
        }}
        timeout={300}
        unmountOnExit
      >
        <div className={styles.showProduct}>
          <OfficeAndFurniture />
        </div>
      </CSSTransition>
      <CSSTransition
        in={showRecreationAndEntertainment}
        classNames={{
          enter: "alert-enter",
          enterActive: "alert-enter-active",
          exit: "alert-exit",
          exitActive: "alert-exit-active",
        }}
        timeout={300}
        unmountOnExit
      >
        <div className={styles.showProduct}>
          <RecreationAndEntertainment />
        </div>
      </CSSTransition>
      <CSSTransition
        in={showToolsAndConstruction}
        classNames={{
          enter: "alert-enter",
          enterActive: "alert-enter-active",
          exit: "alert-exit",
          exitActive: "alert-exit-active",
        }}
        timeout={300}
        unmountOnExit
      >
        <div className={styles.showProduct}>
          <ToolsAndConstruction />
        </div>
      </CSSTransition>
    </div>
  );
};

export default ShowProducts;
