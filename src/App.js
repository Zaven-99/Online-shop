import "./App.css";
import MainPage from "./pages/MainPage";
import Stock from "./Components/sideBarPopUpMenu/stock/Stock";
import Shops from "./Components/sideBarPopUpMenu/shops/Shops";
import ForLegalEntities from "./Components/sideBarPopUpMenu/forLegalEntities/ForLegalEntities";
import Vacancies from "./Components/sideBarPopUpMenu/vacancies/Vacancies";
import Header from "./Components/header/Header";
import LoginModal from "./Components/loginModal/LoginModal";
import HeaderBottom from "./Components/headerBottom/HeaderBottom";
import UserModal from "./Components/userModal/UserModal";
import Cart from "./pages/Cart";
import Footer from "./Components/footer/Footer";
import AppliancesPage from "./pages/AppliancesPage";
import StartModal from "./Components/startModal/StartModal";
import FavouritesPage from "./pages/favouritesPage";

import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";

function App() {
  const [userModal, setIsUserModal] = useState(false);
  const [loginModal, setIsLoginModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timerModal = setTimeout(() => {
      setShowModal(true);
    }, 2000);

    return () => {
      clearInterval(timerModal);
    };
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      {showModal && <StartModal closeModal={closeModal} />}

      <div className="header">
        <Header />
        <HeaderBottom setIsUserModal={setIsUserModal} />
      </div>
      <div>
        <Routes>
          <Route index path="/" element={<MainPage />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/forLegalEntities" element={<ForLegalEntities />} />
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favourite" element={<FavouritesPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
        <div className="sidebarPages">
          <Routes>
            <Route path="/appliancesPages" element={<AppliancesPage />} />
          </Routes>
        </div>
      </div>
      <div>
        <Footer />
      </div>
      <div className="loginModal">
        {loginModal && (
          <LoginModal
            setIsLoginModal={setIsLoginModal}
            setIsUserModal={setIsUserModal}
          />
        )}
      </div>
      <div className="userModal">
        {userModal && (
          <UserModal
            userModal={userModal}
            setIsUserModal={setIsUserModal}
            setIsLoginModal={setIsLoginModal}
          />
        )}
      </div>
    </div>
  );
}

export default App;
