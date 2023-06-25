/**
 * This function allows to calculate the price of a new order
 * @param {Array} products
 * @returns Total Price
 */
export const GetTotalPrice = (products) =>
  products.reduce((sum, product) => {
    return sum + product.price;
  }, 0);
