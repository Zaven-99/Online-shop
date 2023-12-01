import React from "react";
import styles from "../styles/sideBar.module.css";

import { NavLink } from "react-router-dom";
import ShowProducts from "../showProducts/ShowProducts";
import SideBarLinksShow from "./SideBarLinksShow";

const SideBar = () => {

  const {
    isActive,
    active,
    normal,
    RecreationAndEntertainmentLeave,
    BeautyAndHealthLeave,
    SmartphonesAndPhotographicEquipmentLeave,
    PcAndLaptopsLeave,
    PcComponentsLeave,
    showAppliancesProducts,
    showBeautyAndHealth,
    showSmartphonesAndPhotographicEquipment,
    showTvConsoleAudio,
    showPcAndLaptops,
    showPcComponents,
    showOfficeAndFurniture,
    showRecreationAndEntertainment,
    showToolsAndConstruction,
    AppliancesProductsEnter,
    AppliancesProductsLeave,
    BeautyAndHealthEnter,
    SmartphonesAndPhotographicEquipmentEnter,
    TvConsoleAudioEnter,
    TvConsoleAudioLeave,
    PcAndLaptopsEnter,
    PcComponentsEnter,
    OfficeAndFurnitureEnter,
    OfficeAndFurnitureLeave,
    RecreationAndEntertainmentEnter,
    ToolsAndConstructionEnter,
    ToolsAndConstructionLeave,
  } = SideBarLinksShow()

 

  const activeLink = `${styles.sideBarItem} ${styles.active}`;
  const normalLink = `${styles.sideBarItem}`;

  return (
    <div
      className={styles.sideBar}
      onMouseLeave={() => {
        BeautyAndHealthLeave();
        AppliancesProductsLeave();
        SmartphonesAndPhotographicEquipmentLeave();
        TvConsoleAudioLeave();
        PcAndLaptopsLeave();
        PcComponentsLeave();
        OfficeAndFurnitureLeave();
        RecreationAndEntertainmentLeave();
        ToolsAndConstructionLeave();
      }}
    >
      <p>
        <strong>Каталог</strong>
      </p>
      <ul className={styles.sideBarItem}>
        <li>
          <NavLink
            to="/appliancesPages"
            onMouseEnter={() => {
              AppliancesProductsEnter();
              active("appliances");
            }}
            onMouseLeave={() => {
              normal("appliances");
            }}
            className={isActive.appliances ? activeLink : normalLink}
          >
            Бытовая техника
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/beautyAndHealth"
            onMouseEnter={() => {
              BeautyAndHealthEnter();
              active("beautyAndHealth");
            }}
            onMouseLeave={() => {
              normal("beautyAndHealth");
            }}
            className={isActive.beautyAndHealth ? activeLink : normalLink}
          >
            Красота и здоровье
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/smartphonesAndPhotographicEquipment"
            onMouseEnter={() => {
              SmartphonesAndPhotographicEquipmentEnter();
              active("smartphonesAndPhotographicEquipment");
            }}
            onMouseLeave={() => {
              normal("smartphonesAndPhotographicEquipment");
            }}
            className={
              isActive.smartphonesAndPhotographicEquipment
                ? activeLink
                : normalLink
            }
          >
            Смартфоны и фототехника
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tvConsoleAudio"
            onMouseEnter={() => {
              TvConsoleAudioEnter();
              active("tvConsoleAudio");
            }}
            onMouseLeave={() => {
              normal("tvConsoleAudio");
            }}
            className={isActive.tvConsoleAudio ? activeLink : normalLink}
          >
            ТВ, консоли и аудио
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pcAndlaptops"
            onMouseEnter={() => {
              PcAndLaptopsEnter();
              active("pcAndlaptops");
            }}
            onMouseLeave={() => {
              normal("pcAndlaptops");
            }}
            className={isActive.pcAndlaptops ? activeLink : normalLink}
          >
            ПК, ноутбуки
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pcComponents"
            onMouseEnter={() => {
              PcComponentsEnter();
              active("pcComponents");
            }}
            onMouseLeave={() => {
              normal("pcComponents");
            }}
            className={isActive.pcComponents ? activeLink : normalLink}
          >
            комплекующие для ПК
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/officeAndFurniture"
            onMouseEnter={() => {
              OfficeAndFurnitureEnter();
              active("officeAndFurniture");
            }}
            onMouseLeave={() => {
              normal("officeAndFurniture");
            }}
            className={isActive.officeAndFurniture ? activeLink : normalLink}
          >
            Офис и мебель
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/recreationAndEntertainment"
            onMouseEnter={() => {
              RecreationAndEntertainmentEnter();
              active("recreationAndEntertainment");
            }}
            onMouseLeave={() => {
              normal("recreationAndEntertainment");
            }}
            className={
              isActive.recreationAndEntertainment ? activeLink : normalLink
            }
          >
            Отдых и развлечения
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toolsAndConstruction"
            onMouseEnter={() => {
              ToolsAndConstructionEnter();
              active("toolsAndConstruction");
            }}
            onMouseLeave={() => {
              normal("toolsAndConstruction");
            }}
            className={isActive.toolsAndConstruction ? activeLink : normalLink}
          >
            Инструмент и стройка
          </NavLink>
        </li>
      </ul>
      <ShowProducts
        showToolsAndConstruction={showToolsAndConstruction}
        showRecreationAndEntertainment={showRecreationAndEntertainment}
        showOfficeAndFurniture={showOfficeAndFurniture}
        showPcComponents={showPcComponents}
        showPcAndLaptops={showPcAndLaptops}
        showTvConsoleAudio={showTvConsoleAudio}
        showSmartphonesAndPhotographicEquipment={
          showSmartphonesAndPhotographicEquipment
        }
        showAppliancesProducts={showAppliancesProducts}
        showBeautyAndHealth={showBeautyAndHealth}
      />
    </div>
  );
};

export default SideBar;
