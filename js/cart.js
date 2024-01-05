// cart.js

// Function to retrieve and parse cart data from localStorage
function getCartFromLocalStorage() {
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    return JSON.parse(storedCart);
  } else {
    return [];
  }
}

const cart = getCartFromLocalStorage();

function addToCart(productName, productImage, productPrice) {
  const product = { name: productName, imageUrl: productImage, price: productPrice };

  // Check if the product is already in the cart
  const existingProduct = cart.find(item => item.name === productName && item.imageUrl === productImage);

  if (existingProduct) {
    // If the product is already in the cart, increment the quantity
    existingProduct.quantity = (existingProduct.quantity || 1) + 1;
  } else {
    // If the product is not in the cart, add it with quantity 1
    product.quantity = 1;
    cart.push(product);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  console.log("Product added to cart:", product);
}

function renderResults() {
  // Retrieve and parse cart data from localStorage
  const storedCart = getCartFromLocalStorage();

  const resultsContainer = document.getElementById('results-container');
  resultsContainer.innerHTML = '';

  storedCart.forEach(product => {
    // Rest of your code for rendering products
    // ...
    
    const productCard = document.createElement('div');
    productCard.className = 'card text-bg-dark';
    productCard.innerHTML = `
      <div class="arr-cart" id="cart-${product.name}">
        <div class="arr-cartImg">
          <img src="${product.imageUrl}">
        </div>
        <div class="arr-info">
          <h6 class="card-title">${product.name}</h6>
          <h6 class="card-title">${product.quantity}</h6>
        </div>
      </div>
    `;
    resultsContainer.appendChild(productCard);
  });
}


renderResults();
