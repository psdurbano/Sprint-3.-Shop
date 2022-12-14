// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      cartList.push(products[i]);
      console.log(cartList);
    }
  }  
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

// Exercise 2
function cleanCart() {
  cart.length = 0;
  cartList.length = 0;
  console.log(cartList);
    document.getElementById("total_price").innerHTML = 0;
    document.getElementById("cart_list").innerHTML = "";
    document.getElementById("count_product").innerHTML = 0;
}

// Exercise 3
function calculateTotal() {
  total = 0;

  for (i = 0; i < cartList.length; i++) {
    total += cartList[i].price;
  }
  console.log(total);
  return total;
  // Calculate total price of the cart using the "cartList" array
}

// Exercise 4
    function generateCart() {
 // Using the "cartlist" array that contains all the items in the shopping cart,
 // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
     cartList.forEach((item) =>{
      let newItem = cart.find((it) => it.id === item.id);
      if(newItem){
        newItem.quantity +=1;
      } else {
        newItem ={...item, quantity: 1, subtotal:0, subtotalWithDiscount: 0};
        cart.push(newItem);
      }
     });
     applyPromotionsCart()
     console.log(cart);
} 

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  for (let i = 0; i < cart.length; i++){
    if(cart[i].id === 1 && cart[i].quantity >= 3){
      let priceDiscount = 10;
      cart[i].subtotalWithDiscount = priceDiscount * cart[i].quantity;
    } else if (cart[i].id === 3 && cart[i].quantity >= 10){
      let priceDiscount3 = (cart[i].price / 3) * 2;
      cart[i].subtotalWithDiscount = priceDiscount3.toFixed(2) * cart[i].quantity;
    } else{
        cart[i].subtotalWithDiscount = cart[i].subtotal;
    }
  }
}

// Exercise 6
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  let total = 0;
    document.getElementById("cart_list").innerHTML = "";
    for(let i=0; i<cart.length; i++){
        let name = cart[i].name;
        let price = cart[i].price;
        let quantity = cart[i].quantity;
        let totalWithDiscount = cart[i].subtotalWithDiscount;
        document.getElementById("cart_list").innerHTML += `<tr>
        <th scope="row">${name}</th>
        <td>${price}</td>
        <td>${quantity}</td>
        <td>${totalWithDiscount}</td>
        </tr>`
        total += totalWithDiscount;
        document.getElementById("total_price").innerHTML = total;
        }
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

function open_modal() {
  console.log("Open Modal");
  printCart();
}
