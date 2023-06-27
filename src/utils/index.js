/**
 * This function calculates orders total price.
 * @param {Array} products cartProduct: Array of Objects
 * @returns {number} Total price
 */

export const totalPrice = (products) => {
  return products.reduce((acc, product) => acc + product.price, 0);
};
