let sampleResults;
let searchResults;
let currentResults;

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
    description: '34" Quantum Dot OLED Curved Ultrawide<br>FreeSync Premium Pro<br>0.1ms Response Time<br>165Hz Refresh Rate<br>3440 x 1440 Maximum Resolution',
    imageUrls: ['../img/products/gaming-monitor-category/product-1/1.png','../img/products/gaming-monitor-category/product-1/2.png','../img/products/gaming-monitor-category/product-1/3.png','../img/products/gaming-monitor-category/product-1/4.png']
  },
  {
    id: 14,
    name: 'BenQ - XL2566K',
    price: 599,
    category: 'Gaming Monitor',
    description: '24.5" TN LED Gaming Monitor<br>DyAc⁺™ Technology<br>1ms Response Time<br>360Hz Refresh Rate<br>1920 x 1080 Maximum Resolution',
    imageUrls: ['../img/products/gaming-monitor-category/product-2/1.png','../img/products/gaming-monitor-category/product-2/2.png','../img/products/gaming-monitor-category/product-2/3.png']
  },
  {
    id: 15,
    name: 'ROG Swift - PG27AQDM',
    price: 849,
    category: 'Gaming Monitor',
    description: '26.5" OLED<br>G-SYNC® compatible<br>0.03ms Response Time<br>240Hz Refresh Rate<br>2560 x 1440 Maximum Resolution',
    imageUrls: ['../img/products/gaming-monitor-category/product-3/1.png','../img/products/gaming-monitor-category/product-3/2.png','../img/products/gaming-monitor-category/product-3/3.png','../img/products/gaming-monitor-category/product-3/4.png','../img/products/gaming-monitor-category/product-3/5.png']
  },
  {
    id: 16,
    name: 'LG - UltraGear',
    price: 299,
    category: 'Gaming Monitor',
    description: '27" UltraWide QHD Nano IPS Display<br>FreeSync Premium, G-SYNC Compatible<br>1ms Response Time<br>165Hz Refresh Rate<br>2560 x 1440 Maximum Resolution',
    imageUrls: ['../img/products/gaming-monitor-category/product-4/1.png','../img/products/gaming-monitor-category/product-4/2.png','../img/products/gaming-monitor-category/product-4/3.png','../img/products/gaming-monitor-category/product-4/4.png']
  },
  {
    id: 17,
    name: 'Samsung - S90C Series',
    price: 1499,
    category: 'TV',
    description: '55" UHD 4K OLED<br>120Hz Refresh Rate<br>HDR 10+<br>Tizen Smart Platform<br>2023 Model Year',
    imageUrls: ['../img/products/tv-category/product-1/1.png','../img/products/tv-category/product-1/2.png','../img/products/tv-category/product-1/3.png','../img/products/tv-category/product-1/4.png']
  },
  {
    id: 18,
    name: 'Sony - BRAVIA XR',
    price: 1499,
    category: 'TV',
    description: '65" UHD 4K Mini-LED<br>120Hz Refresh Rate<br>HDR 10<br>Google TV Smart Platform<br>2023 Model Year',
    imageUrls: ['../img/products/tv-category/product-2/1.png','../img/products/tv-category/product-2/2.png','../img/products/tv-category/product-2/3.png','../img/products/tv-category/product-2/4.png']
  },
  {
    id: 19,
    name: 'LG - C3 Series',
    price: 1299,
    category: 'TV',
    description: '55" UHD 4K OLED<br>120Hz Refresh Rate<br>HDR 10<br>webOS Smart Platform<br>2023 Model Year',
    imageUrls: ['../img/products/tv-category/product-3/1.png','../img/products/tv-category/product-3/2.png','../img/products/tv-category/product-3/3.png','../img/products/tv-category/product-3/4.png']
  },
  {
    id: 20,
    name: 'Hisense - U7 Series',
    price: 699,
    category: 'TV',
    description: '65" UHD 4K QLED<br>144Hz Refresh Rate<br>HDR 10+<br>Google TV Smart Platform<br>2023 Model Year',
    imageUrls: ['../img/products/tv-category/product-4/1.png','../img/products/tv-category/product-4/2.png','../img/products/tv-category/product-4/3.png','../img/products/tv-category/product-4/4.png']
  },
  {
    id: 21,
    name: 'SENSE7 Nomad Basic',
    price: 99,
    category: 'Gaming Table',
    description: 'Dimensions:<br>Width: 140 cm<br>Depth: 60 cm<br>Height: 75 cm',
    imageUrls: ['../img/products/gaming-desks/product-1/1.png','../img/products/gaming-desks/product-1/2.png','../img/products/gaming-desks/product-1/3.png','../img/products/gaming-desks/product-1/4.png','../img/products/gaming-desks/product-1/5.png']
  },
  {
    id: 22,
    name: 'Ultradesk Frag',
    price: 175,
    category: 'Gaming Table',
    description: 'Dimensions:<br>Width: 140 cm<br>Depth: 60 cm<br>Height: 76 cm',
    imageUrls: ['../img/products/gaming-desks/product-2/1.png','../img/products/gaming-desks/product-2/2.png','../img/products/gaming-desks/product-2/3.png','../img/products/gaming-desks/product-2/4.png']
  },
  {
    id: 23,
    name: 'Ultradesk Winger',
    price: 439,
    category: 'Gaming Table',
    description: 'Dimensions:<br>Width: 155 cm<br>Depth: 60 cm<br>Adjustable Height: 75-122 cm',
    imageUrls: ['../img/products/gaming-desks/product-3/1.png','../img/products/gaming-desks/product-3/2.png','../img/products/gaming-desks/product-3/3.png','../img/products/gaming-desks/product-3/4.png']
  },
  {
    id: 24,
    name: 'HOMEXPERTS Desk TRON',
    price: 129,
    category: 'Gaming Table',
    description: 'Dimensions:<br>Width: 198 cm<br>Depth: 85 cm<br>Height: 76 cm',
    imageUrls: ['../img/products/gaming-desks/product-4/1.png','../img/products/gaming-desks/product-4/2.png','../img/products/gaming-desks/product-4/3.png','../img/products/gaming-desks/product-4/4.png','../img/products/gaming-desks/product-4/5.png']
  },
  {
    id: 25,
    name: 'X Rocker Pedestal',
    price: 249,
    category: 'Gaming Chair',
    description: 'Color: Red and Black<br>Material: Faux Leather<br>Chair Weight: 20 KG',
    imageUrls: ['../img/products/gaming-chairs-category/product-1/1.png','../img/products/gaming-chairs-category/product-1/2.png','../img/products/gaming-chairs-category/product-1/3.png','../img/products/gaming-chairs-category/product-1/4.png','../img/products/gaming-chairs-category/product-1/5.png']
  },
  {
    id: 26,
    name: 'ThunderX3 Core',
    price: 339,
    category: 'Gaming Chair',
    description: 'Color: Blue and Black<br>Material: Leatherette, Weave Fabric<br>Chair Weight: 30.5 KG',
    imageUrls: ['../img/products/gaming-chairs-category/product-2/1.png','../img/products/gaming-chairs-category/product-2/2.png','../img/products/gaming-chairs-category/product-2/3.png']
  },
  {
    id: 27,
    name: 'Corsair TC100',
    price: 249,
    category: 'Gaming Chair',
    description: 'Color: Gray and Black<br>Material: Nylon, Polyurethane<br>Chair Weight: 18 KG',
    imageUrls: ['../img/products/gaming-chairs-category/product-3/1.png','../img/products/gaming-chairs-category/product-3/2.png','../img/products/gaming-chairs-category/product-3/3.png']
  },
  {
    id: 28,
    name: 'Secretlab Titan Evo',
    price: 589,
    category: 'Gaming Chair',
    description: 'Color: Royal<br>Material: Faux Leather<br>Chair Weight: 34.47 KG',
    imageUrls: ['../img/products/gaming-chairs-category/product-4/1.png','../img/products/gaming-chairs-category/product-4/2.png','../img/products/gaming-chairs-category/product-4/3.png']
  },
  {
    id: 29,
    name: 'SteelSeries - Apex Pro 2023',
    price: 199,
    category: 'Gaming Keyboard',
    description: 'Keyboard Technology: Mechanical<br>Form Factor: Tenkeyless (TKL)<br>Connection Type: Wireless<br>Key Switches: OmniPoint 2.0 Adjustable HyperMagnetic Switches',
    imageUrls: ['../img/products/gaming-keyboards-category/product-1/1.png','../img/products/gaming-keyboards-category/product-1/2.png','../img/products/gaming-keyboards-category/product-1/3.png','../img/products/gaming-keyboards-category/product-1/4.png']
  },
  {
    id: 30,
    name: 'Corsair - K70',
    price: 129,
    category: 'Gaming Keyboard',
    description: 'Keyboard Technology: Optical<br>Form Factor: Tenkeyless (TKL)<br>Connection Type: USB Type-C<br>Key Switches: CORSAIR OPX Optical-Mechanical',
    imageUrls: ['../img/products/gaming-keyboards-category/product-2/1.png','../img/products/gaming-keyboards-category/product-2/2.png','../img/products/gaming-keyboards-category/product-2/3.png','../img/products/gaming-keyboards-category/product-2/4.png']
  },
  {
    id: 31,
    name: 'White Shark - SHINOBI',
    price: 45,
    category: 'Gaming Keyboard',
    description: 'Keyboard Technology: Mechanical<br>Form Factor: 60%<br>Connection Type: USB Type-C<br>Key Switches: OUTEMU Red Switches',
    imageUrls: ['../img/products/gaming-keyboards-category/product-3/1.png','../img/products/gaming-keyboards-category/product-3/2.png','../img/products/gaming-keyboards-category/product-3/3.png']
  },
  {
    id: 32,
    name: 'White Shark - RONIN',
    price: 25,
    category: 'Gaming Keyboard',
    description: 'Keyboard Technology: Membrane<br>Form Factor: 65%<br>Connection Type: USB 2.0<br>Key Switches: Membrane',
    imageUrls: ['../img/products/gaming-keyboards-category/product-4/1.png','../img/products/gaming-keyboards-category/product-4/2.png','../img/products/gaming-keyboards-category/product-4/3.png']
  },
  {
    id: 33,
    name: 'Razer - Viper V2 Pro',
    price: 149,
    category: 'Gaming Mouses and accessories',
    description: 'Maximum Sensitivity: 30000 DPI<br>Number of Buttons: 5<br>Connection Type: Wireless<br>Mouse Weight: 58g',
    imageUrls: ['../img/products/gaming-mouse-category/product-1/1.png','../img/products/gaming-mouse-category/product-1/2.png','../img/products/gaming-mouse-category/product-1/3.png']
  },
  {
    id: 34,
    name: 'Logitech - G502 LIGHTSPEED',
    price: 119,
    category: 'Gaming Mouses and accessories',
    description: 'Maximum Sensitivity: 25600 DPI<br>Number of Buttons: 11<br>Connection Type: Wireless<br>Mouse Weight: 114-130g',
    imageUrls: ['../img/products/gaming-mouse-category/product-2/1.png','../img/products/gaming-mouse-category/product-2/2.png','../img/products/gaming-mouse-category/product-2/3.png','../img/products/gaming-mouse-category/product-2/4.png']
  },
  {
    id: 35,
    name: 'Razer - Gigantus V2',
    price: 49,
    category: 'Gaming Mouses and accessories',
    description: 'Surface Type: Soft<br>Length: 1200mm<br>Width: 550mm<br>Thickness: 4mm',
    imageUrls: ['../img/products/gaming-mouse-category/product-3/1.png','../img/products/gaming-mouse-category/product-3/2.png','../img/products/gaming-mouse-category/product-3/3.png']
  },
  {
    id: 36,
    name: 'Logitech - G440',
    price: 19,
    category: 'Gaming Mouses and accessories',
    description: 'Surface Type: Hard<br>Length: 460mm<br>Width: 400mm<br>Thinkness: 3mm',
    imageUrls: ['../img/products/gaming-mouse-category/product-4/1.png','../img/products/gaming-mouse-category/product-4/2.png','../img/products/gaming-mouse-category/product-4/3.png']
  },
  {
    id: 37,
    name: 'SteelSeries - Arctis Nova Pro',
    price: 349,
    category: 'Gaming Headset',
    description: 'Connection Type: Wireless<br>Sound Mode: Surround 7.1<br>Supported Platforms: PC, PS, Switch<br>Frequency Response: 10Hz-22kHz<br>Battery Life: 44 hours',
    imageUrls: ['../img/products/gaming-headsets-category/product-1/1.png','../img/products/gaming-headsets-category/product-1/2.png','../img/products/gaming-headsets-category/product-1/3.png']
  },
  {
    id: 38,
    name: 'HyperX - Cloud III',
    price: 89,
    category: 'Gaming Headset',
    description: 'Connection Type: Wired<br>Sound Mode: dtsX<br>Supported Platforms: PC, PS, Xbox, Switch, Mobile<br>Frequency Response: 10Hz-21kHz<br>Cable Connector: Type-C, Type-A, 3.5mm',
    imageUrls: ['../img/products/gaming-headsets-category/product-2/1.png','../img/products/gaming-headsets-category/product-2/2.png','../img/products/gaming-headsets-category/product-2/3.png']
  }
  // Add more products as needed
];


document.addEventListener('DOMContentLoaded', function () {
  var searchQuery = getParameterByName('search');
  var searchResultsContainer = document.getElementById('searchResults');
  searchResultsContainer.innerHTML = '<p>Search results for: <strong>' + searchQuery + '</strong></p>';
  sampleResults = [...products];
  var lowerCsearchQuery = searchQuery.toLowerCase();
  searchResults = sampleResults.filter(product =>
    product.name.toLowerCase().includes(lowerCsearchQuery) ||
    product.category.toLowerCase().includes(lowerCsearchQuery)
  );
  console.log(sampleResults);
  console.log(searchResults);
  currentResults = [...searchResults];
  renderResults();
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

function filterResults() {
  const filterValue = document.getElementById('filterSelect').value;
  if (filterValue === 'all') {
    currentResults = [...searchResults];
  } else {
    currentResults = searchResults.filter(product => product.category === filterValue);
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

function renderResults() {
  const resultsContainer = document.getElementById('results-container');
  resultsContainer.innerHTML = '';

  currentResults.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'col';
    productCard.innerHTML = `
      <div class="card text-bg-dark">
        <div id="carousel-${product.id}" class="carousel slide">
          <div class="carousel-indicators">
            ${renderCarouselIndicators(product.imageUrls, product.id)}
          </div>
          <div class="carousel-inner">
            ${renderCarouselItems(product.imageUrls)}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${product.id}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carousel-${product.id}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.description}</p>
          <p class="card-text">Price: €${product.price.toFixed(2)}</p>
          <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
      </div>
    `;
    resultsContainer.appendChild(productCard);
  });
}

function renderCarouselItems(imageUrls) {
  return imageUrls.map((imageUrl, index) => `
    <div class="carousel-item ${index === 0 ? 'active' : ''}">
      <img src="${imageUrl}">
    </div>
  `).join('');
}

function renderCarouselIndicators(imageUrls, productID) {
  return imageUrls.map((_, index) => `
    <button type="button" data-bs-target="#carousel-${productID}" data-bs-slide-to="${index}" class="${index === 0 ? 'active' : ''}"></button>
  `).join('');
}
