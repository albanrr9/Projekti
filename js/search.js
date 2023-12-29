function search() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
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
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
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