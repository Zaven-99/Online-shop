import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css"; // Подключение стилей Bootstrap
import "./carouselBrands.css";
import { NavLink } from "react-router-dom";

import { brands } from "../../helper/API";

 

function CarouselBrands() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="brands">
          {brands.map((brands , key) => (
            <div className="brands-item" key = {key}>
            <NavLink to = {`/brands/${brands.label.toLowerCase()}`}><img className = 'apple'  src={brands.img} alt="" /></NavLink>
          </div>
          ))}
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="brands">
          {brands.map((brands , key) => (
            <div className="brands-item" key = {key}>
            <NavLink to = {`/brands/${brands.label.toLowerCase()}`}><img className = 'apple'  src={brands.img} alt="" /></NavLink>
          </div>
          ))}
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="brands">
          {brands.map((brands , key) => (
            <div className="brands-item" key = {key}>
            <NavLink to = {`/brands/${brands.label.toLowerCase()}`}><img className = 'apple'  src={brands.img} alt="" /></NavLink>
          </div>
          ))}
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBrands;
