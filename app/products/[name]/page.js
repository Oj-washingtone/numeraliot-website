import React from "react";

import "../product.css";
import ProductFeatures from "@/components/products/ProductFeatures";
import ProductBanner from "@/components/products/ProductBanner";
import products from "@/data/products";

export default async function Products({ params }) {
  const { name } = await params;
  const product = products[name];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="">
      <ProductBanner product={product} />
      <ProductFeatures product={product} />
    </div>
  );
}
