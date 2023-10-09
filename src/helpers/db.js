import { product } from "./products";

export const getProductsInCart = (idsProductAddedToCart) => {
  const products = product.list();
  const productsInCart = products.filter((product) =>
    idsProductAddedToCart.includes(product.id)
  );
  return productsInCart;
};

// export const createOrder = (
//   cart,
//   checkout,
//   total,
//   setCurrentStep,
//   setIsLoading
// ) => {
//   // const auth = require("@google-cloud/local-auth");
//   // const shreadsheetId = "1VYzUeRrKKHBp76VZ1YqAntYuNcRWm8iB-S4Uaxt8rsw";
//   const URL_DB = 'https://docs.google.com/spreadsheets/d/1VYzUeRrKKHBp76VZ1YqAntYuNcRWm8iB-S4Uaxt8rsw/edit?usp=sharing'
//   setIsLoading(true);
//   fetch(URL_DB, {
//     method: "POST",
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       items: cart,
//       comprador: checkout,
//       total: total,
//     }),
//   })

export const createOrder = async (
  cart,
  checkout,
  total,
  setCurrentStep,
  setIsLoading
) => {
  console.log(checkout)
  const cartItems = cart
    .map(
      (item) =>
        `Name: ${item.name}, Quantity: ${item.quantity}, Price: ${item.price}`
    )
    .join("\n");

  const update = [
    checkout.direction,
    checkout.email,
    checkout.formaDePago,
    "Pendiente",
    cartItems,
    total,
  ];
  const filaAEditar = 3;
  response = await gapi.client.sheets.spreadsheets.values.update({
    spreadsheetId: "1VYzUeRrKKHBp76VZ1YqAntYuNcRWm8iB-S4Uaxt8rsw",
    range: `Ordenes!A${filaAEditar}:F${filaAEditar}`,
    values: [update],
    valueInputOption: "USER_ENTERED",
  });
  setCurrentStep("finish");
  return response;
};
// const client = auth.getClient();

// const request = new sheets.Spreadsheet.SpreadsheetValues.UpdateRequest({
//   spreadsheetId: shreadsheetId,
//   range: "A1:G1",
//   values: [[id, cart, checkout, total]],
// });
// return client.spreadsheets
//   .values()
//   .update(request)
//   .then(
//     () => {
//       console.log("orden guardada");
//     },
//     (error) => {
//       console.error(error);
//     }
//   )
//     .finally(setCurrentStep("finish"), setIsLoading(false));
// };
