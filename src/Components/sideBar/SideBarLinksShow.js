import { useState } from "react";

const SideBarLinksShow = () => {
  const [isActive, setIsActive] = useState({
    appliances: false,
    beautyAndHealth: false,
    smartphonesAndPhotographicEquipment: false,
    tvConsoleAudio: false,
    pcAndLaptops: false,
    pcComponents: false,
    officeAndFurniture: false,
    recreationAndEntertainment: false,
    toolsAndConstruction: false,
  });

  const active = (linkKey) => {
    setIsActive((prevStates) => ({ ...prevStates, [linkKey]: true }));
  };

  const normal = (linkKey) => {
    setIsActive((prevStates) => ({ ...prevStates, [linkKey]: false }));
  };

  const [showAppliancesProducts, setShowAppliancesProducts] = useState(false);
  const [showBeautyAndHealth, setShowBeautyAndHealth] = useState(false);
  const [
    showSmartphonesAndPhotographicEquipment,
    setShowSmartphonesAndPhotographicEquipment,
  ] = useState(false);
  const [showTvConsoleAudio, setShowTvConsoleAudio] = useState(false);
  const [showPcAndLaptops, setShowPcAndLaptops] = useState(false);
  const [showPcComponents, setShowPcComponents] = useState(false);
  const [showOfficeAndFurniture, setShowOfficeAndFurniture] = useState(false);
  const [showRecreationAndEntertainment, setShowRecreationAndEntertainment] =
    useState(false);
  const [showToolsAndConstruction, setShowToolsAndConstruction] =
    useState(false);

  //AppliancesProductsEnter
  const AppliancesProductsEnter = () => {
    setShowAppliancesProducts(true);
    BeautyAndHealthLeave();
    SmartphonesAndPhotographicEquipmentLeave();
    TvConsoleAudioLeave();
    PcAndLaptopsLeave();
    PcComponentsLeave();
    OfficeAndFurnitureLeave();
    RecreationAndEntertainmentLeave();
    ToolsAndConstructionLeave();
  };
  const AppliancesProductsLeave = () => {
    setShowAppliancesProducts(false);
  };
  //BeautyAndHealthEnter
  const BeautyAndHealthEnter = () => {
    setShowBeautyAndHealth(true);
    AppliancesProductsLeave();
    SmartphonesAndPhotographicEquipmentLeave();
    TvConsoleAudioLeave();
    PcAndLaptopsLeave();
    PcComponentsLeave();
    OfficeAndFurnitureLeave();
    RecreationAndEntertainmentLeave();
    ToolsAndConstructionLeave();
  };
  const BeautyAndHealthLeave = () => {
    setShowBeautyAndHealth(false);
  };
  //SmartphonesAndPhotographicEquipmentEnter
  const SmartphonesAndPhotographicEquipmentEnter = () => {
    setShowSmartphonesAndPhotographicEquipment(true);
    AppliancesProductsLeave();
    BeautyAndHealthLeave();
    TvConsoleAudioLeave();
    PcAndLaptopsLeave();
    PcComponentsLeave();
    OfficeAndFurnitureLeave();
    RecreationAndEntertainmentLeave();
    ToolsAndConstructionLeave();
  };
  const SmartphonesAndPhotographicEquipmentLeave = () => {
    setShowSmartphonesAndPhotographicEquipment(false);
  };
  //showTvConsoleAudio
  const TvConsoleAudioEnter = () => {
    setShowTvConsoleAudio(true);
    AppliancesProductsLeave();
    BeautyAndHealthLeave();
    SmartphonesAndPhotographicEquipmentLeave();
    PcAndLaptopsLeave();
    PcComponentsLeave();
    OfficeAndFurnitureLeave();
    RecreationAndEntertainmentLeave();
    ToolsAndConstructionLeave();
  };
  const TvConsoleAudioLeave = () => {
    setShowTvConsoleAudio(false);
  };
  //showPcAndLaptops
  const PcAndLaptopsEnter = () => {
    setShowPcAndLaptops(true);
    AppliancesProductsLeave();
    BeautyAndHealthLeave();
    SmartphonesAndPhotographicEquipmentLeave();
    TvConsoleAudioLeave();
    PcComponentsLeave();
    OfficeAndFurnitureLeave();
    RecreationAndEntertainmentLeave();
    ToolsAndConstructionLeave();
  };
  const PcAndLaptopsLeave = () => {
    setShowPcAndLaptops(false);
  };
  //showPcComponents
  const PcComponentsEnter = () => {
    setShowPcComponents(true);
    AppliancesProductsLeave();
    BeautyAndHealthLeave();
    SmartphonesAndPhotographicEquipmentLeave();
    TvConsoleAudioLeave();
    PcAndLaptopsLeave();
    OfficeAndFurnitureLeave();
    RecreationAndEntertainmentLeave();
    ToolsAndConstructionLeave();
  };
  const PcComponentsLeave = () => {
    setShowPcComponents(false);
  };
  //showOfficeAndFurniture
  const OfficeAndFurnitureEnter = () => {
    setShowOfficeAndFurniture(true);
    AppliancesProductsLeave();
    BeautyAndHealthLeave();
    SmartphonesAndPhotographicEquipmentLeave();
    TvConsoleAudioLeave();
    PcAndLaptopsLeave();
    PcComponentsLeave();
    RecreationAndEntertainmentLeave();
    ToolsAndConstructionLeave();
  };
  const OfficeAndFurnitureLeave = () => {
    setShowOfficeAndFurniture(false);
  };
  //showRecreationAndEntertainment
  const RecreationAndEntertainmentEnter = () => {
    setShowRecreationAndEntertainment(true);
    AppliancesProductsLeave();
    BeautyAndHealthLeave();
    SmartphonesAndPhotographicEquipmentLeave();
    TvConsoleAudioLeave();
    PcAndLaptopsLeave();
    PcComponentsLeave();
    OfficeAndFurnitureLeave();
    ToolsAndConstructionLeave();
  };
  const RecreationAndEntertainmentLeave = () => {
    setShowRecreationAndEntertainment(false);
  };
  //showToolsAndConstruction
  const ToolsAndConstructionEnter = () => {
    setShowToolsAndConstruction(true);
    AppliancesProductsLeave();
    BeautyAndHealthLeave();
    SmartphonesAndPhotographicEquipmentLeave();
    TvConsoleAudioLeave();
    PcAndLaptopsLeave();
    PcComponentsLeave();
    OfficeAndFurnitureLeave();
    RecreationAndEntertainmentLeave();
  };
  const ToolsAndConstructionLeave = () => {
    setShowToolsAndConstruction(false);
  };

  return {
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
  };
};

export default SideBarLinksShow;
