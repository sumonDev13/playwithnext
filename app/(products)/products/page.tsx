import React from "react";
import Link from "next/link";

import { productList } from "@/data/data";
export default function Products() {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Products</h1>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
