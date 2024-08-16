const shoppingCart = [
  {name:"David", price:1000, quantity:3},
  {name:"Ayo", price:2000, quantity:5},
  {name:"Tope", price:4000, quantity:1},
  {name:"Tee", price:3000, quantity:4},
  {name:"Vee", price:500, quantity:2},
  {name:"Isaac", price:1000, quantity:3},
  {name:"Sam", price:3000, quantity:3},
]

function calculateSubtotal(cart) {
  let subtotal = 0;
  for (let i = 0; i < cart.length; i++) {
    subtotal += cart[i].price * cart[i].quantity
  }
  return subtotal;
}
let subtotal = calculateSubtotal(shoppingCart)

function applyDiscount(subtotal, discountpercent) {
  let discount = (subtotal * discountpercent) / 100;
  return subtotal - discount;
}
// applyDiscount(calculateSubtotal(shoppingCart), 10)

function calculateTax(discountpercent, tax) {
  let taxRate = (discountpercent * tax) / 100;
  return discountpercent + taxRate;
}
// calculateTax(applyDiscount(calculateSubtotal(shoppingCart), 10), 20)

function calculateTotal(discountpercent, tax) {
  let total = applyDiscount(subtotal, discountpercent) + calculateTax(discountpercent, tax);
  return console.log("Total shopping is ₦" + total);
}

calculateTotal(20, 10)

// If we need to get the overall total of the shopping cart, we can use the following code:
// function calculateTotal(subtotal, discountpercent, tax) {
//   let total = applyDiscount(subtotal, discountpercent) + calculateTax(discountpercent, tax);
//   return console.log(total);
// }

// calculateTotal(20, 10)