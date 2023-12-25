// script.js

let sampleResults = [];
let currentResults = [];

function filterResults() {
  const filterValue = document.getElementById('filterSelect').value;
  if (filterValue === 'all') {
    currentResults = [...sampleResults];
  } else {
    currentResults = sampleResults.filter(product => product.category === filterValue);
  }
  renderResults();
}

function sortResults() {
  const sortValue = document.getElementById('sortSelect').value;
  if (sortValue === 'priceAsc') {
    currentResults.sort((a, b) => a.price - b.price);
  } else if (sortValue === 'priceDesc') {
    currentResults.sort((a, b) => b.price - a.price);
  }
  renderResults();
}

document.addEventListener('DOMContentLoaded', function () {
  const products = [
    { id: 1, name: 'PC 1', price: 19.99, category: 'Category 1 <br> dewd', imageUrl: 'product1.jpg' , imageUrl1: 'product1.jpg' },
    { id: 2, name: 'Laptop 2', price: 29.99, category: 'Category 2', imageUrl: 'product2.jpg' },
    { id: 3, name: 'console 3', price: 39.99, category: 'Category 1', imageUrl: 'product3.jpg' },
    // Add more products as needed
  ];

  sampleResults = [...products];
  currentResults = [...sampleResults];

  renderResults();
});

function search(event) {
  // Check if the Enter key is pressed or the search button is clicked
  if (event.key === 'Enter' || event.type === 'click') {
    // If Enter is pressed, prevent the default form submission behavior
    if (event.key === 'Enter') {
      event.preventDefault();
    }

    // Your existing search logic
    
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  
    // Construct the search query parameters
    const queryParams = `?searchTerm=${encodeURIComponent(searchTerm)}`;
  
    // Redirect to the search results page in the "pages" folder with the constructed query parameters
    window.location.href = `pages/search-results.html${queryParams}`;


    const searchResults = sampleResults.filter(product =>
      (searchTerm ? (product.name.toLowerCase().includes(searchTerm) || product.category.toLowerCase().includes(searchTerm)) : true));

  // Render the search results
    renderResults(searchResults);
  }
}
let cardCount = 0;

function renderResults() {
  const resultsContainer = document.getElementById('results-container');
  resultsContainer.innerHTML = '';

  currentResults.forEach(product => {
    const productCard = document.createElement('div');
    cardCount++;
    console.log(cardCount);
    productCard.className = 'col-md-4 mb-4';
    productCard.innerHTML = `
    <div class="card text-bg-dark">
    <div id="carouselExampleIndicators` + cardCount +`" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button"
          data-bs-target="#carouselExampleIndicators` + cardCount + `"
          data-bs-slide-to="0" class="active" aria-current="true"
          aria-label="Slide 1"></button>
        <button type="button"
          data-bs-target="#carouselExampleIndicators` + cardCount + `"
          data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button"
          data-bs-target="#carouselExampleIndicators` + cardCount + `"
          data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button"
          data-bs-target="#carouselExampleIndicators` + cardCount + `"
          data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="${product.imageUrl}">
        </div>
        <div class="carousel-item">
          <img
            src="${product.imageUrl}">
        </div>
        <div class="carousel-item">
          <img
            src="${product.imageUrl}">
        </div>
        <div class="carousel-item">
          <img
            src="${product.imageUrl}">
        </div>
      </div>
      <button class="carousel-control-prev" type="button"
        data-bs-target="#carouselExampleIndicators` + cardCount + `"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon"
          aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button"
        data-bs-target="#carouselExampleIndicators` + cardCount + `"
        data-bs-slide="next">
        <span class="carousel-control-next-icon"
          aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="card-body">
      <h5 class="card-title">${product.name}</h5>
      <p class="card-text">${product.category}</p>
      <p class="card-text"><strong>Price:</strong> €${product.price.toFixed(2)}</p>
      <a href="#" class="btn btn-primary">Add to Cart</a>
    </div>
  </div>
      
    `;
    resultsContainer.appendChild(productCard);
  });
}
