let sampleResults;

const products = [
  { 
    id: 1,
    name: 'Memory Gaming PC',
    price: 698,
    category: 'Gaming PC',
    description: 'AMD Ryzen 5 3600<br>16GB DDR4<br>1TB M.2 SSD<br>RX 6400 4GB',
    imageUrls: ['../img/products/gaming-pcs-category/product-3/1.png', '../img/products/gaming-pcs-category/product-3/2.png', '../img/products/gaming-pcs-category/product-3/3.png']
  },
  {
    id: 2,
    name: 'dcl24 Gaming PC',
    price: 1069,
    category: 'Gaming PC',
    description: 'AMD Ryzen 7 5800X<br>32GB DDR4<br>500GB M.2 & 2TB HDD<br>RTX 3060 12GB',
    imageUrls: ['../img/products/gaming-pcs-category/product-1/1.png','../img/products/gaming-pcs-category/product-1/2.png','../img/products/gaming-pcs-category/product-1/3.png','../img/products/gaming-pcs-category/product-1/4.png']
  },
  {
    id: 3,
    name: 'Captiva Gaming PC',
    price: 2630,
    category: 'Gaming PC',
    description: 'Intel Core i9-11900KF<br>32GB DDR4<br>1TB M.2 NVME<br>RTX 3080 Ti 12GB',
    imageUrls: ['../img/products/gaming-pcs-category/product-2/1.png','../img/products/gaming-pcs-category/product-2/2.png','../img/products/gaming-pcs-category/product-2/3.png','../img/products/gaming-pcs-category/product-2/4.png','../img/products/gaming-pcs-category/product-2/5.png']
  },
  {
    id: 4,
    name: 'ROG STRIX Gaming PC',
    price: 1419,
    category: 'Gaming PC',
    description: 'Intel Core i5-12400F<br>16GB DDR4<br>512GB SSD & 1TB HDD<br>RTX 3060 12GB',
    imageUrls: ['../img/products/gaming-pcs-category/product-4/1.png','../img/products/gaming-pcs-category/product-4/2.png','../img/products/gaming-pcs-category/product-4/3.png']
  },
  {
    id: 5,
    name: 'ROG Zephyrus G14',
    price: 1599,
    category: 'Gaming Laptop',
    description: 'AMD Ryzen 9 7940HS<br>16GB DDR5 4800MHz<br>512GB SSD PCIe 4.0<br>RTX 4060 8GB<br>14" QHD (16:10) 165Hz Display',
    imageUrls: ['../img/products/gaming-laptops-category/product-1/1.png','../img/products/gaming-laptops-category/product-1/2.png','../img/products/gaming-laptops-category/product-1/3.png','../img/products/gaming-laptops-category/product-1/4.png']
  },
  {
    id: 6,
    name: 'MSI Thin GF63',
    price: 999,
    category: 'Gaming Laptop',
    description: 'Intel Core i7-12650H<br>32GB DDR4 3200Hz<br>1TB SSD PCIe 4.0<br>RTX 3050 6GB<br>15.6" FHD 144Hz Display',
    imageUrls: ['../img/products/gaming-laptops-category/product-2/1.png','../img/products/gaming-laptops-category/product-2/2.png','../img/products/gaming-laptops-category/product-2/3.png','../img/products/gaming-laptops-category/product-2/4.png']
  },
  {
    id: 7,
    name: 'Lenovo Legion Pro 5i',
    price: 1799,
    category: 'Gaming Laptop',
    description: 'Intel Core i7-13700HX<br>16GB DDR5<br>1TB SSD PCIe 4.0<br>RTX 4070 8GB<br>16" WQXGA 240Hz Display',
    imageUrls: ['../img/products/gaming-laptops-category/product-3/1.png','../img/products/gaming-laptops-category/product-3/2.png','../img/products/gaming-laptops-category/product-3/3.png','../img/products/gaming-laptops-category/product-3/4.png']
  },
  {
    id: 8,
    name: 'Alienware m18',
    price: 2549,
    category: 'Gaming Laptop',
    description: 'AMD Ryzen 9 7845HX<br>32GB DDR5<br>1TB NVMe M.2 PCIe<br>RTX 4070 8GB<br>18" FHD+ 480Hz Display',
    imageUrls: ['../img/products/gaming-laptops-category/product-4/1.png','../img/products/gaming-laptops-category/product-4/2.png','../img/products/gaming-laptops-category/product-4/3.png','../img/products/gaming-laptops-category/product-4/4.png','../img/products/gaming-laptops-category/product-4/5.png']
  },
  {
    id: 9,
    name: 'Sony Playstation 5',
    price: 449,
    category: 'Console',
    description: 'PlayStation®5 Digital Edition<br>DualSense™ Wireless Controller<br>1TB SSD',
    imageUrls: ['../img/products/consoles-category/product-1/1.png','../img/products/consoles-category/product-1/2.png','../img/products/consoles-category/product-1/3.png']
  },
  {
    id: 10,
    name: 'Xbox Series X',
    price: 399,
    category: 'Console',
    description: 'Xbox Series X console<br>Xbox Wireless Controller<br>1TB SSD',
    imageUrls: ['../img/products/consoles-category/product-2/1.png','../img/products/consoles-category/product-2/2.png','../img/products/consoles-category/product-2/3.png']
  },
  {
    id: 11,
    name: 'Nintendo Switch',
    price: 299,
    category: 'Console',
    description: 'Nintendo Switch 32GB Console<br>Nintendo Switch dock<br>6.2" LCD screen',
    imageUrls: ['../img/products/consoles-category/product-3/1.png','../img/products/consoles-category/product-3/2.png','../img/products/consoles-category/product-3/3.png']
  },
  {
    id: 12,
    name: 'ASUS ROG Ally',
    price: 599,
    category: 'Console',
    description: '7" FHD 1080p 120Hz Display<br>512GB NVMe SSD',
    imageUrls: ['../img/products/consoles-category/product-4/1.png','../img/products/consoles-category/product-4/2.png','../img/products/consoles-category/product-4/3.png','../img/products/consoles-category/product-4/4.png']
  },
  {
    id: 13,
    name: 'Alienware - AW3423DWF',
    price: 799,
    category: 'Gaming Monitor',
    description: '34" Quantum Dot OLED Curved Ultrawide<br>FreeSync Premium Pro',
    imageUrls: ['../img/products/gaming-monitor-category/product-1/1.png','../img/products/gaming-monitor-category/product-1/2.png','../img/products/gaming-monitor-category/product-1/3.png','../img/products/gaming-monitor-category/product-1/4.png']
  }
  // Add more products as needed
];


document.addEventListener('DOMContentLoaded', function () {
  var searchQuery = getParameterByName('search');
  var searchResultsContainer = document.getElementById('searchResults');
  searchResultsContainer.innerHTML = '<p>Search results for: <strong>' + searchQuery + '</strong></p>';
  sampleResults = [...products];

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
