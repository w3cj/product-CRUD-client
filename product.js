const productSection = document.querySelector('main section');
const product_id = getIdFromQuery();

getProduct(product_id)
  .then(showProduct);

function showProduct(product) {
  const buttons = `
    <a href="/edit.html?id=${product.id}" class="btn btn-success">Edit Product</a>
    <button id="deleteButton" class="btn btn-danger">Delete Product</button>
  `;
  addProductToPage(product, 12, buttons, productSection);

  const deleteButton = document.querySelector('#deleteButton');
  deleteButton.addEventListener('click', () => {
    deleteProduct(product_id)
      .then(() => {
        window.location = '/';
      });
  });
}

function deleteProduct(id) {
  return fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}
