'use strict';

// Set up an empty cart for use on this page.
var cart;
loadCart();

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  if (cartItems) {
    cart = new Cart(cartItems);
  } else {
    cart = new Cart([]);
  }
}

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i = 0; i < Product.allProducts.length; i++) {
    var optionEl = document.createElement('option');
    optionEl.textContent = Product.allProducts[i].name;
    selectElement.appendChild(optionEl);
  }
}


// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  event.preventDefault();
  // TODO: Prevent the page from reloading

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage('cart');
  updateCounter();
  updateCartPreview();
}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
  var item = document.getElementById('items');
  var selecteditem = item.value;
  var quantity = document.getElementById('quantity');
  var selectedQuantity = quantity.value
  cart.addItem(selecteditem, selectedQuantity)
  console.log(cart);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  // Do we have our cart.items array.
  var items = cart.items; // when do we set these values?
  var list = document.getElementById('itemCount');
  list.innerHTML = null;
  // take the contents of our cart and append quantity and product.name to our ul
  for (var i = 0; i < items.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = 'Count: ' + items[i].quantity + " Product: " + items[i].product;
    list.appendChild(listItem);
  }
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information

}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();