// file1.js

import { cart, addToCart } from './cart.js';

addToCart('Product from File 1', 'image1.jpg', 10);
console.log("Cart in File 1:", cart);
