export const useGetMessageCart = (cart, total, checkout) => {
  const items =
    Array.from(cart.values())
      .map((item) => `* ${item.name} - X ${item.quantity} - $${item.price}`)
      .join("\n") +
    `\n\n* Email: ${checkout.email}\n* Direccion: ${checkout.direction}\n\n* Forma de pago: *${checkout.formaDePago}*` +
    `\n\n**TOTAL: ${total}**`;
  return { items };
};
