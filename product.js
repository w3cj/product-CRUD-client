const productSection = document.querySelector('main section');
const product_id = getIdFromQuery();

getProduct(product_id)
  .then(showProduct);

function getProduct(id) {
  return fetch(`${API_URL}/${id}`)
    .then(res => res.json());
}

function showProduct(product) {
  const buttons = `<a href="/edit.html?id=${product.id}" class="btn btn-success">Edit Product</a>`;
  addProductToPage(product, 12, buttons, productSection);
}
