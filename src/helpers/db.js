import { product } from "./products";
import { supabase } from "../supabase/supabase";
export const getProductsInCart = (idsProductAddedToCart) => {
  const products = product.list();
  const productsInCart = products.filter((product) =>
    idsProductAddedToCart.includes(product.id)
  );
  return productsInCart;
};

export const createOrder = async (
  cart,
  checkout,
  total,
  setCurrentStep,
  setIsLoading
) => {
  try {
    const order = {
      buyer: { ...checkout },
      items: cart,
      total: total,
      state: 'No leído'
    };
    await supabase.from("orders").upsert(order);
    const response = await supabase.from("products").select();
    const orderAdded = await response.data;
  } catch (error) {
    console.error("Error adding product:", error);
  } finally {
    setCurrentStep("finish");
  }
};

export const getOffCustomers = async () => {
  try {
    const response = await supabase.from("off_customers").select();
    return response.data;
  } catch (error) {
    throw new Error("Error fetching products: " + error.message);
  }
}