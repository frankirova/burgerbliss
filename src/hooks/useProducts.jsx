import { useEffect, useState } from "react";
import { product } from "../helpers/products";

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    product.list().then((data) => {
      setProducts(data);
    });
  }, []);
  return {
    products,
  };
};
