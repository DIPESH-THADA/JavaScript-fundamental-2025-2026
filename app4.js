let x1 = 56.0; // with decimals
let x2 = 56; // without decimals
let y = 154e5; // exponential 15400000
let z = 154e-5; // exponential 0.00154

console.log(x1, x2, y, z);

let x = 9999999999999999n; // BigInt for very large integers
console.log(x);

let price = 5550;
console.log(price);
price = undefined;
console.log(price);

let numberOfProduct = 5;
let afterAddingCart = numberOfProduct++;
console.log(
  "Before adding at the cart " + afterAddingCart + " product was in the cart.",
);
console.log("Now " + numberOfProduct + " products are in the cart.");

let numărProduse = 1; // Utilizatorul adaugă un produs, dar acum vrem să afișăm imediat noua stare:
let dupăAdăugare = ++numărProduse;
console.log("Acum sunt " + dupăAdăugare + " produse în coș.");

// let numberA = prompt("Please enter number A:");
// let numberB = prompt("Please enter number B:");
// let sum = parseInt(numberA) + parseInt(numberB);
// alert("Sum is: " + sum);

// let oldPrice = prompt("Please enter the old price:");
// let newprice = prompt("Please enter the new price:");
// let discount =
//   ((parseFloat(oldPrice) - parseFloat(newprice)) / parseFloat(oldPrice)) * 100;
// alert("The discount is: " + discount.toFixed(2) + "%");

let produsDisponibil = false;
console.log(produsDisponibil == 0);

let înregistrat = true;
let total = 2500;
console.log(înregistrat && total > 2000);

let totalAmount = 2800;
let premium = true;
console.log(totalAmount > 3000 || premium);

// If a customer benefits from free shipping,
// whether a discount coupon can be applied;
// whether the purchase is recommended (if there is at least one of these two advantages).

let freeShipping = true;
let discountCoupon = false;
console.log(freeShipping || discountCoupon);

// the total value of the cart (e.g., 2499.90);
// the threshold for free delivery (e.g., 3000);
// Coupon (yes/no)—if the customer has a discount coupon.

let totalCartValue = 2499.9;
let freeDeliveryThreshold = 3000;
let hasDiscountCoupon = true;
let isFreeDelivery = totalCartValue >= freeDeliveryThreshold;
let canApplyDiscount = hasDiscountCoupon;
let isPurchaseRecommended = isFreeDelivery || canApplyDiscount;
console.log("Is free delivery available? " + isFreeDelivery);
console.log("Can apply discount? " + canApplyDiscount);
console.log("Is purchase recommended? " + isPurchaseRecommended);

function calculateDiscount(old_price, percent) {
  return old_price - (old_price * percent) / 100;
}

let discountedPrice = calculateDiscount(100, 20);
console.log("Discounted price: " + discountedPrice);

function calculateDiscount(old_price, percent) {
  return old_price - (old_price * percent) / 100;
}
let new_price = calculateDiscount(450, 7);
// alert(new_price);

function myFunction(...number) {
  console.log(number);
}
console.log(myFunction(1, 2, 3, 4));

// let price1 = 100;
// function applyDiscount(price) {
//   price = price * 0.9;
//   console.log("Price after discount:", price);
// }
// applyDiscount(price1);
// console.log("Price outside function:", price1);

let product = { name: " Adidași", price: 100 };
function applyDiscount(product) {
  product.price = product.price * 0.9;
  console.log("Price after discount:", product.price);
}

applyDiscount(product);
console.log("Price outside function:", product.price);

let totalProducts = 20;
let randomIndex = Math.floor(Math.random() * totalProducts);
console.log("Vă recomandăm produsul cu numărul:", randomIndex);

let discount = Math.floor(Math.random() * 16) + 5; // 5-20% console.log("Reducerea ta", discount + "%");

let baseDiscount = 5; // reducerea inițială de 5%
let level = 3; // nivelul clientului
let totalDiscount = Math.pow(2, level - 1) * baseDiscount;
console.log("Reducerea la nivelul " + level + " este: " + totalDiscount + "%");

let text = "Se procesează comanda...\rFinalizată!";
console.log(text);

let txt1 = "Java";
let txt2 = "Script";
let txt3 = txt1.concat(txt2);
console.log(txt3);

let name = "Milan";
let message = "Salut, ".concat(name, "! Bine ai revenit!");
console.log(message);
console.log(message); // ""Salut, Milan! Bine ai revenit!"

const INSERT = "0000000";
let bankAccount = prompt("Please enter bank account number:");
let firstPart = bankAccount.substr(0, 2);
let secondPart = bankAccount.substr(2, 9);
let bankAccountFinal = firstPart + INSERT + secondPart;
alert("Electronic form is " + bankAccountFinal);

// PP – 2 prefix letters for category (e.g., SH for shoes)
// 0000 – fixed block of four zeros
// NNNNN – model number (exactly 5 digits; if shorter → fill in with leading zeros)
// YY – the last two digits of the year (e.g., 25)

// The customer/operator enters the short form: ppnnnnn (e.g. sh734 or Sh01234). From this the complete SKU form is built.
// Steps:
// Take the input as a string (don't convert the entire input to number).
// Normalize:
// Elimination of spaces at the beginning and end(trim());
// Converting the prefix to uppercase(toUpperCase()).
// Extract:
// the first 2 characters → the prefix PP;
// the remainder → the numerical part of the NNNNN model.
// If the numeric part is less than 5 digits, fill in with leading zeros (for example, 734 → 00734).
// Insert the fixed block 0000 after the prefix and before the numeric part.
// Add the year suffix YY (e.g., 25).
// Compile in format: PP-0000-NNNNN-YY.
// Show the result.

function generateSKU(input) {
  let trimmedInput = input.trim();
  let prefix = trimmedInput.substr(0, 2).toUpperCase();
  let numericPart = trimmedInput.substr(2);
  let paddedNumericPart = numericPart.padStart(5, "0");
  let yearSuffix = new Date().getFullYear().toString().substr(-2);
  return `${prefix}-0000-${paddedNumericPart}-${yearSuffix}`;
}

let userInput = prompt("Please enter the short SKU (e.g., sh734):");
let completeSKU = generateSKU(userInput);
alert("Complete SKU: " + completeSKU);
