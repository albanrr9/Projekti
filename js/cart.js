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

function addToCart(productId, productName, productImage, productPrice) {
  const product = { id: productId, name: productName, imageUrl: productImage, price: productPrice };

  // Check if the product is already in the cart
  const existingProduct = cart.find(item => item.id === productId);

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

  const table = document.createElement('table');
  table.className = 'cart-table';

  // Create table header
  const headerRow = table.insertRow();
  headerRow.innerHTML = '<th>Product</th><th>Product</th><th class="tcenter">Quantity</th><th class="tcenter">Subtotal</th><th class="tcenter">Action</th>';
  headerRow.className = 'headerRow';
  storedCart.forEach(product => {
    const row = table.insertRow();
    row.id = `cart-${product.id}`;
    row.className = 'content';

    // Product Image
    const imgCell = row.insertCell();
    imgCell.innerHTML = `<img src="${product.imageUrl}" alt="${product.name}" class="cart-img">`;
    imgCell.classList = 'cartImgCont';

    // Product Name
    const nameCell = row.insertCell();
    nameCell.textContent = product.name;

    // Quantity
    const quantityCell = row.insertCell();
    quantityCell.innerHTML = `
  <div class="quantity">
    <button onclick="decreaseQuantity(${product.id})"><i class="fa-solid fa-minus"></i></button>
    <span id="quantity-${product.id}">${product.quantity}</span>
    <button onclick="increaseQuantity(${product.id})"><i class="fa-solid fa-plus"></i></button>
  </div>
`;
    quantityCell.classList = "tcenter";


    // Subtotal
    const subtotalCell = row.insertCell();
    const subtotal = product.price * product.quantity;
    subtotalCell.textContent = `€${subtotal.toFixed(2)}`;
    subtotalCell.classList = "tcenter";

    // Action (Remove button)
    const actionCell = row.insertCell();
    actionCell.innerHTML = `<button class="removeButton" onclick="removeFromCart(${product.id})"><i class="fa-solid fa-xmark"></i></button>`;
    actionCell.classList = 'removeCont';
  });

  resultsContainer.appendChild(table);
}


function decreaseQuantity(productId) {
  // Retrieve cart data from localStorage
  const storedCart = getCartFromLocalStorage();

  // Find the product in the cart
  const product = storedCart.find(product => product.id === productId);

  // If the product is found and the quantity is greater than 1, decrease the quantity
  if (product && product.quantity > 1) {
    product.quantity--;

    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(storedCart));

    // Update the displayed quantity
    document.getElementById(`quantity-${productId}`).textContent = product.quantity;

    // Re-render the cart
    renderResults();
  }
}

// Function to increase quantity
function increaseQuantity(productId) {
  // Retrieve cart data from localStorage
  const storedCart = getCartFromLocalStorage();

  // Find the product in the cart
  const product = storedCart.find(product => product.id === productId);

  // If the product is found, increase the quantity
  if (product) {
    product.quantity++;

    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(storedCart));

    // Update the displayed quantity
    document.getElementById(`quantity-${productId}`).textContent = product.quantity;

    // Re-render the cart
    renderResults();
  }
}


// Function to remove product from cart
function removeFromCart(productId) {
  // Retrieve cart data from localStorage
  const storedCart = getCartFromLocalStorage();

  // Filter out the product to be removed
  const updatedCart = storedCart.filter(product => product.id !== productId);

  // Update localStorage
  localStorage.setItem('cart', JSON.stringify(updatedCart));

  // Re-render the cart
  renderResults();
}

renderResults();
