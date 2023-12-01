import React from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../helper/API";
import SearchProductItem from "../Components/searchProductItem/SearchProductItem";
import { useEffect, useState } from "react";

import styles from "../Components/styles/productPage.module.css";
import ProductDescription from "../Components/productDescription/ProductDescription";

const ProductPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchProducts();
        const foundProduct = products.find((prod) => prod.id === Number(id));

        setProduct(foundProduct);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className={styles.productPage}>
      {product && <SearchProductItem product={product} />}
      {product && <ProductDescription product={product} />}
    </div>
  );
};

export default ProductPage;
