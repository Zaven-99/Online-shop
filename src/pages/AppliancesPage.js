import React, { useState, useEffect, useCallback } from "react";
import styles from "../Components/styles/appliancesPage.module.css";

import ProductItem from "../Components/productItem/ProductItem";
import { fetchProducts } from "../helper/API";


const AppliancesPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProductsData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const productsData = await fetchProducts();  
      setProducts(productsData);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProductsData();
  }, [fetchProductsData]);

   
  return (
    <div className={styles['card-container']}>
      <div className={styles['card-container__inner']}>
        {Array.isArray(products) ? (
          products.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              thumbnail={product.thumbnail}
              rating={product.rating}
            />
          ))
        ) : (
          <p>Продукты отсутствуют или произошла ошибка при загрузке</p>
        )}
        {!isLoading && products.length === 0 && !error && (
          <div className={styles.getStatus}>
            <p>Продукты отсутствуют</p>
          </div>
        )}

        {isLoading && (
          <div className={styles.getStatus}>
            <p>Загрузка продуктов...</p>
          </div>
        )}

        {!isLoading && error && (
          <div className={styles.getStatus}>
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppliancesPage;
