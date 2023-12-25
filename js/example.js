<div class="card text-bg-dark">
              <div id="carouselExampleIndicators3" class="carousel slide">
                <div class="carousel-indicators">
                  <button type="button"
                    data-bs-target="#carouselExampleIndicators3"
                    data-bs-slide-to="0" class="active" aria-current="true"
                    aria-label="Slide 1"></button>
                  <button type="button"
                    data-bs-target="#carouselExampleIndicators3"
                    data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button"
                    data-bs-target="#carouselExampleIndicators3"
                    data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button"
                    data-bs-target="#carouselExampleIndicators3"
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
                  data-bs-target="#carouselExampleIndicators3"
                  data-bs-slide="prev">
                  <span class="carousel-control-prev-icon"
                    aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button"
                  data-bs-target="#carouselExampleIndicators3"
                  data-bs-slide="next">
                  <span class="carousel-control-next-icon"
                    aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text"><strong>Price:</strong> €${product.price.toFixed(2)}</p>
                <a href="#" class="btn btn-primary">Add to Cart</a>
              </div>
            </div>