const productsSection = document.querySelector('main section');
const API_URL = 'http://localhost:3000/api/v1/products';

getProducts()
  .then(showProducts);

function getProducts() {
  return fetch(API_URL)
    .then(res => res.json());
}

function showProducts(products) {
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productsSection.appendChild(productDiv);
    productDiv.outerHTML = `
      <div class="card col-sm-4">
        <img class="card-img-top" src="${product.image}" alt="${product.title}">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${product.description}</p>
          <a href="/product.html?id=${product.id}" class="btn btn-primary">View Product</a>
        </div>
      </div>
    `;
  });
}
