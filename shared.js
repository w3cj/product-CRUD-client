const API_URL = 'http://localhost:3000/api/v1/products';

function getIdFromQuery() {
  const parts = window.location.search.match(/\?id=([0-9]+)/);
  return parts[1];
}

function addProductToPage(product, size, buttons, parent) {
  const productDiv = document.createElement('div');
  parent.appendChild(productDiv);
  productDiv.outerHTML = `
    <div class="card col-sm-${size}">
      <img class="card-img-top" src="${product.image}" alt="${product.title}">
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.description}</p>
        <p class="card-text">$${product.price}</p>
        <p class="card-text">${product.quantity} left in stock</p>
        ${buttons}
      </div>
    </div>
  `;
}
