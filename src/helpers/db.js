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

// export const getOrders = async () => {
//   try {
//     const response = await supabase.from("orders").select();
//     const orders = await response.data;
//     return orders
//   } catch (error) {
//     console.error("Error fetching products:", error);
//   }
// };

// export const createOrder = async (
//   cart,
//   checkout,
//   total,
//   setCurrentStep,
//   setIsLoading
// ) => {
//   console.log(checkout)
//   const cartItems = cart
//     .map(
//       (item) =>
//         `Name: ${item.name}, Quantity: ${item.quantity}, Price: ${item.price}`
//     )
//     .join("\n");

//   const update = [
//     checkout.direction,
//     checkout.email,
//     checkout.formaDePago,
//     "Pendiente",
//     cartItems,
//     total,
//   ];
//   const filaAEditar = 3;
//   response = await gapi.client.sheets.spreadsheets.values.update({
//     spreadsheetId: "1VYzUeRrKKHBp76VZ1YqAntYuNcRWm8iB-S4Uaxt8rsw",
//     range: `Ordenes!A${filaAEditar}:F${filaAEditar}`,
//     values: [update],
//     valueInputOption: "USER_ENTERED",
//   });
//   setCurrentStep("finish");
//   return response;
// };
