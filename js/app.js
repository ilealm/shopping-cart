'use strict';

// Cart constructor.
var Cart = function(items) {
  // this.items is an array of CartItem instances.
  this.items = items;
  
};

Cart.prototype.addItem = function(product, quantity) {
  if (product!=='')
  {
    // TODO: Fill in this instance method to create a new CartItem and add it to this.items
    var newCarItem = new CartItem(product,quantity);
    this.items.push(newCarItem);
  }
};

Cart.prototype.saveToLocalStorage = function() {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
 var storedCart = localStorage.getItem('BusMallCart');
 // review if we have something in cart
 if (storedCart === null) {
   var cartToStorage = JSON.stringify(cart.items[0]);
   localStorage.setItem('BusMallCart', cartToStorage);
  //alert('create new sto obj');
 }
 else{
  var stoArray = [];
  stoArray= JSON.parse(storedCart);
  var newItem =[]; //the one that is already in the array
  newItem = cart.items[0];

  // console.log('stoArray, from sto: ');
  // console.log(stoArray);
  //  console.log('item to store: ' );
  //  console.log(newItem);
   var s =[];
   s.push(stoArray);
   s.push(newItem);
   console.log(s);
   var cartToStorage = JSON.stringify(s);
   localStorage.setItem('BusMallCart', cartToStorage);

  //  stoArray.items.push(newItem);
  //  console.log(stoArray)
 }


};

Cart.prototype.removeItem = function(item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
};

var CartItem = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

// Product contructor.
var Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/usb.gif', 'USB');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();
