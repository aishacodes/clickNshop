export const totalCartAmount = (cartItems: any[]) => {
  return Number(
    cartItems.reduce((acc, item) => {
      const itemAmount = item.quantity * item.product.price;
      return acc + itemAmount;
    }, 0)
  ).toLocaleString();
};
