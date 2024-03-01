import React from "react";
import AddToCart from "./AddToCart";

function ProductCard() {
  return (
    <div className="p-5 my-5 bg-sky-300 text-white text-xl hover:bg-slate-300">
      <h3>ProductCard</h3>
      <AddToCart />
    </div>
  );
}

export default ProductCard;
