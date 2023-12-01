import React, { useEffect, useState, Children, cloneElement } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import styles from "./carouselFeaturesSliders.module.css";

const PAGE_WIDTH = 450;
const SLIDE_INTERVAL = 5000;

const CarouselFeaturesSliders = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);
  const [arrowShow , setArrowShow] = useState(false)


const arrowVisible = () => {
    setArrowShow(true)
}
const arrowDontVisible = () => {
    setArrowShow(false)
}

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      let newOffset = currentOffset + PAGE_WIDTH;
      if (newOffset > 0) {
        newOffset = -900;
      }
      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      let newOffset = currentOffset - PAGE_WIDTH;

      const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
      if (newOffset < -900) {
        newOffset = 0;
      }
      return Math.max(newOffset, maxOffset);
    });
  };

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        });
      })
    );
  }, [children]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleLeftArrowClick();
    }, SLIDE_INTERVAL);

    return () => {
      clearInterval(intervalId); 
    };
  }, [offset]);
  return (
    <div onMouseEnter={arrowVisible} onMouseLeave={arrowDontVisible} className={styles["main-container"]}>
      {arrowShow && <div className={styles.sircle}>
        <FaChevronLeft
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={handleLeftArrowClick}
        />
      </div>}

      <div className={styles.window}>
        <div
          className={styles["all-items-container"]}
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {pages}
        </div>
      </div>
      {arrowShow && <div className={styles.sircle}>
        <FaChevronRight
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={handleRightArrowClick}
        />
      </div>}
    </div>
  );
};

export default CarouselFeaturesSliders;
