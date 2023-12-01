import React from 'react';
import styles from "../styles/productPage.module.css"
const ProductDescription = ({ product}) => {
    return (
        <div>
            <p className={styles.description}>{product.description}</p>
        </div>
    );
};

export default ProductDescription;