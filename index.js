const productsSection = document.querySelector('main section');

getProducts()
  .then(showProducts);

function getProducts() {
  return fetch(API_URL)
    .then(res => res.json());
}

function showProducts(products) {
  products.forEach(product => {
    const buttons = `<a href="/product.html?id=${product.id}" class="btn btn-primary">View Product</a>`;
    addProductToPage(product, 4, buttons, productsSection);
  });
}
