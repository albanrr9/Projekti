// search-results.js

document.addEventListener('DOMContentLoaded', function () {
  // Get the search query from the URL
  var searchQuery = getParameterByName('search');

  // Display the search query on the page
  var searchResultsContainer = document.getElementById('searchResults');
  searchResultsContainer.innerHTML = '<p>Search results for: <strong>' + searchQuery + '</strong></p>';

  // You can perform additional logic to fetch and display actual search results
});

// Function to get query parameter from URL
function getParameterByName(name) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(window.location.href);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
