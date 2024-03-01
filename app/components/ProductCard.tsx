import React from "react";
import AddToCart from "./AddToCart";
import styles from "./ProductCard.module.css";

function ProductCard() {
  return (
    <>
      <div className={styles.card}>ProductCard</div>
      <AddToCart />
    </>
  );
}

export default ProductCard;
