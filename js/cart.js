/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var tableBody = document.getElementsByTagName('tbody')[0];
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  tableBody.innerHTML = null;
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

  tableBody.innerHTML = null;
  // TODO: Iterate over the items in the cart
  for (var i = 0; i < cart.items.length; i++) {
    // TODO: Create a TR
    var row = document.createElement('tr');
    tableBody.appendChild(row);
    // TODO: Create a TD for the delete link, quantity,  and the item
    var link = document.createElement('td');
    var quantity = document.createElement('td');
    var product = document.createElement('td');
    link.innerHTML = '<a id="' + cart.items[i].product + '" >X</a > '
    quantity.textContent = cart.items[i].quantity;
    product.textContent = cart.items[i].product;
    row.appendChild(link);
    row.appendChild(quantity);
    row.appendChild(product);
  }
}

function removeItemFromCart(event) {

  console.log(event.target.id);
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  cart.removeItem({ name: event.target.id })
  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  showCart();
}

// This will initialize the page and draw the cart on screen
renderCart();