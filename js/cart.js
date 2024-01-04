// cart.js

const cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, productImage, productPrice) {
  const product = { name: productName, imageUrl: productImage, price: productPrice };
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  console.log("Product added to cart:", product);
}

export { cart, addToCart };
