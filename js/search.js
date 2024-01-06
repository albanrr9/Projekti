function search() {
  const searchTerm = document.getElementById('searchInput').value;
  const queryParams = `?search=${encodeURIComponent(searchTerm)}`;
  window.location.href = `pages/search-results.html${queryParams}`;
}

function handleKeyPress(event) {
  // Check if the pressed key is Enter (key code 13)
  if (event.key === 'Enter') {
    // Trigger the search function
    event.preventDefault();
    return search();
  }
}

function search1() {
  const searchTerm = document.getElementById('searchInput').value;
  const queryParams = `?search=${encodeURIComponent(searchTerm)}`;
  window.location.href = `search-results.html${queryParams}`;
}

function handleKeyPress1(event) {
  // Check if the pressed key is Enter (key code 13)
  if (event.key === 'Enter') {
    // Trigger the search function
    event.preventDefault();
    return search1();
  }
}

// Assuming you have a button with the id "addToCartButton"
const addToCartButton = document.getElementById('addToCart');
const addToCart1Button = document.getElementById('addToCart1');
const addToCart2Button = document.getElementById('addToCart2');
const addToCart3Button = document.getElementById('addToCart3');

// Add a click event listener to the button
addToCartButton.addEventListener('click', showCartAlert);
addToCart1Button.addEventListener('click', showCartAlert);
addToCart2Button.addEventListener('click', showCartAlert);
addToCart3Button.addEventListener('click', showCartAlert);

// Function to show the alert
function showCartAlert() {
  // Create a new div element for the alert
  const alertDiv = document.createElement('div');
  alertDiv.classList.add('arr-cart-alert');

  // Set the alert text
  alertDiv.innerText = 'Product added to cart';

  // Append the alert div to the body
  document.body.appendChild(alertDiv);

  // Set a timeout to remove the alert after a few seconds
  setTimeout(() => {
    alertDiv.remove();
  }, 3000); // 3000 milliseconds (3 seconds)
}

