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
    productCard.className = 'col';
    productCard.innerHTML = `
      <div class="card text-bg-dark">
        <div class="arr-cart" id="cart-${product.name}">
          <div>
            <img class="arr-cartImg" src="${product.imageUrl}">
          </div>
          <div class="arr-info">
            <h5>${product.name}</h5>
            <h5>${product.quantity}</h5>
          </div>
          
        </div>
      </div>
    `;
    resultsContainer.appendChild(productCard);
  });
}


renderResults();
