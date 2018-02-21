const API_URL = window.location.hostname == 'localhost' ? 'http://localhost:3000/api/v1/products' : 'https://cjs-store.herokuapp.com/api/v1/products';

function getIdFromQuery() {
  const parts = window.location.search.match(/\?id=([0-9]+)/);
  return parts[1];
}

function getProduct(id) {
  return fetch(`${API_URL}/${id}`)
    .then(res => res.json());
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


function validateFormGetProduct(form, errorMessage) {
  const formData = new FormData(form);
  const title = formData.get('title');
  const price = Number(formData.get('price'));
  const quantity = Number(formData.get('quantity'));

  if(title.trim() == '') {
    errorMessage.textContent = 'Title is required';
    errorMessage.style.display = '';
    return;
  }

  if(isNaN(price) || price <= 0) {
    errorMessage.textContent = 'Price must be greater than $0';
    errorMessage.style.display = '';
    return;
  }

  if(!Number.isInteger(quantity) || quantity < 0) {
    errorMessage.textContent = 'Quantity must be a positive whole number.';
    errorMessage.style.display = '';
    return;
  }

  const product = {
    title,
    description: formData.get('description'),
    price,
    quantity,
    image: formData.get('image')
  };

  return product;
}
