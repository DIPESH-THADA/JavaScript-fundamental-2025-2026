"use strict";
/* const products = ["Dress", "Shirt", "T-Shirt", "Jacket"];
console.log(products[0]);
console.log(products[1]);

const product2 = ["Dress", "Shirt", "T-Shirt", "Jacket"];
console.log(product2.toString());

const cart = ["Adidași", "Tricou", "Geacă", "Șort"]; // Afișarea produselor individuale
console.log("Produse în coș:");
for (let i = 0; i < cart.length; i++) {
  console.log("- " + cart[i]);
} // Afișarea tuturor produselor ca un singur string
console.log("Toate produsele: " + cart.toString());
 */

// ("Women", "Men", "Kids", "Accessories"), for clothing sizes ("XS", "S", "M", "L", "XL") or for payment methods ("Card", "CashOnDelivery", "PayPal").

/* let categories = ["Women", "Men", "Kids", "Accessories"];
let sizes = ["XS", "S", "M", "L", "XL"];
sizes.push("XXL"); // Adăugăm o nouă dimensiune la array-ul de dimensiuni
let paymentMethods = ["Card", "CashOnDelivery", "PayPal"];

console.log("Categories: " + categories.toString());
console.log("Sizes: " + sizes.toString());
console.log("Payment Methods: " + paymentMethods.toString());

let produce = [
  ["Geacă", "Tricou"],
  ["Pantaloni", "Rochie"],
];

console.log("Produse pentru femei: " + produce[0].toString());
console.log("Produse pentru bărbați: " + produce[1].toString()); */

/* let users = [
  [1, "john", "04as89v4v", "john@gmail.com"],
  [2, "emma", "7dh9hh4t4", "emma@gmail.com"],
  [3, "ben", "9fghj44858", "ben@gmail.com"],
  [4, "ava", "dfh57h24gv", "ava@gmail.com"],
];

for (let i = 0; i < users.length; i++) {
  console.log(users[i][1]);

  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users[i].length; j++) {
      console.log(users[i][j]);
    }
  }
} */

/* const sizes = ["S", "M", "L"];
const colors = ["Black", "Blue", "Red"];
const priceMatrix = [
  [5999, 6099, 6199], // S pe culori
  [6299, 6399, 6499], // M
  [6599, 6699, 6799], // L
];
// // Preț pentru M,
const y = sizes.indexOf("M"); // 1
const j = colors.indexOf("Blue"); // 1
console.log(priceMatrix[y][j]); // 6399 */

// Opțiuni permise
/* const paymentMethods = ["VISA", "Master", "Amex"];
const installments = ["1", "3", "6", "12"]; // Matricea comisioanelor (rânduri = carduri, coloane = rate)
const feeMatrix = [
  [0.8, 1.2, 1.9, 3.2], // VISA
  [0.7, 1.1, 1.8, 3.0], // Master
  [1.0, 1.5, 2.2, 3.5], // Amex
];
// TODO 1: Cereți input de la utilizator (tip card și număr rate) //
// TODO 2: Validați ambele inputuri; dacă nu sunt în liste, raportați eroare // - folosiți indexOf pentru a găsi indexul // - dacă indexOf returnează -1, inputul este invalid //
// TODO 3: Dacă ambele indexuri sunt valide, citiți procentul din feeMatrix // - fee = feeMatrix[cardIndex][installmentIndex]
// TODO 4: <PROCENAT>%" Afișați mesajul: "Comision pentru <CARD> la <RATE> rate: <PROCENT>%"

let cardInput = prompt("Introduceți tipul cardului (VISA, Master, Amex):");
let installmentInput = prompt("Introduceți numărul de rate (1, 3, 6, 12):");

let cardIndex = paymentMethods.indexOf(cardInput);
let installmentIndex = installments.indexOf(installmentInput);

if (cardIndex === -1) {
  console.error("Eroare: Tip de card invalid.");
} else if (installmentIndex === -1) {
  console.error("Eroare: Număr de rate invalid.");
} else {
  let fee = feeMatrix[cardIndex][installmentIndex];
  console.log(
    `Comision pentru ${paymentMethods[cardIndex]} la ${installments[installmentIndex]} rate: ${fee}%`,
  );
}
 */

// let products = ["Dress", "Shirt", "T-Shirt", "Jacket"];
// for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);
// }

/* let products = ["Dress", "Shirt", "T-Shirt", "Jacket"];
for (let property in products) {
  console.log(property);
}

for (let property in products) {
  console.log(products[property]);
} */

/* let products = ["Dress", "Shirt", "T-Shirt", "Jacket"];
for (let p of products) {
  console.log(p);
}
 */
/* let products = ["Dress", "Shirt", "T-Shirt", "Jacket"];
products.forEach(writeProduct);
function writeProduct(item, index) {
  console.log(index + ": " + item);
}

const price = [650, 290, 310];
const quantity = [1, 3, 2];
let total = 0;
for (const i in price) {
  total += price[i] * quantity[i];
}
console.log(`Total: ${total} RON`);
 */

// const prices = [650, 420, 290, 1150];
// const TVA = 0.2;

// const priceWithVat = [];

// prices.forEach((price) => {
//   priceWithVat.push(price + price * TVA);
// });

// console.log(priceWithVat);

/* const products = [
  ["Shirt", 290],
  ["Dress", 650],
  ["Jacket", 1150],
  ["T-Shirt", 420],
  ["Skirt", 310],
  ["Pants", 500],
  ["Shoes", 800],
  ["Hat", 150],
  ["Socks", 50],
  ["Belt", 100],
];
const VAT = 0.2;

const priceWithVat = [];

products.forEach((product) => {
  const price = product[1];
  priceWithVat.push(price + price * VAT);
});

console.log(priceWithVat);

console.log(products.map((product) => product[1] + product[1] * VAT)); */

// const product = { id: 101, name: "Dress", price: 659, currency: "RON" };

// console.log(`${product.name}, -- ${product.price} ${product.currency}`);

// let user = {
//   id: 1,
//   username: "john",
//   password: "04as89v4v",
//   email: "john@gmail.com",
// };
// for (let u in user) {
//   console.log(user[u]);
// }

// let order = { orderId: "A-55", items: 2, total: 980, status: "processing" };

// for (let key in order) {
//   console.log(`${key}: ${order[key]}`);
// }

/* let map = new Map();
map.set("id", 1);
map.set("username", "john");
map.set("password", "04as89v4v");
map.set("email", "john@gmail.com");

for (let [key, value] of map) {
  console.log(`${key}: ${value}`);
}

console.log(map.size); */

/* let map = new Map();
map.set("username", "john");
map.set("email", "john@gmail.com");
console.log(map.has("username")); // true
console.log(map.has("password")); // false
 */

/* let map = new Map();
map.set("id", 1);
map.set("username", "john");
map.set("password", "04as89v4v");
map.set("email", "john@gmail.com");
map.delete("username");
console.log(map.has("username")); // false */

// SKU123 → 659, SKU124 → 839.

/* let productPrices = new Map();
productPrices.set("SKU123", 659);
productPrices.set("SKU124", 839);
console.log(productPrices.get("SKU123")); // 659
console.log(productPrices.get("SKU124")); // 839

let map = new Map();
map.set("id", 1);
map.set("username", "john");
map.set("password", "04as89v4v");
map.set("email", "john@gmail.com");
for (let [key, value] of map) {
  console.log(key + ": " + value);
}

for (let [key, value] of map.entries()) {
  console.log(key + ": " + value);
}

// SAVE5 → 5%, SAVE10 → 10%, BLACKFRIDAY → 25%).

let discountCodes = new Map();
discountCodes.set("SAVE5", 5);
discountCodes.set("SAVE10", 10);
discountCodes.set("BLACKFRIDAY", 25);
console.log(discountCodes.get("SAVE5")); // 5
console.log(discountCodes.get("SAVE10")); // 10
console.log(discountCodes.get("BLACKFRIDAY")); // 25

discountCodes.delete("BLACKFRIDAY");
console.log(discountCodes.has("BLACKFRIDAY")); // false

discountCodes.set("SANTACLAUS", 30);
console.log(discountCodes.get("SANTACLAUS")); // 30 */

/* let products = ["Dress", "Shirt", "T-Shirt", "Jacket"];
products.sort();
console.log(products.toString());

function compareNumbers(a, b) {
  return a - b;
}
let prices = [150, 240, 55, 11, 45, 485, 401];
prices.sort(compareNumbers);
console.log(prices.toString()); */

// let products = ["Dress", "Shirt", "T-Shirt", "Jacket"];
// let last = products.pop();
// console.log(last);
// console.log(products.toString());

// let products = ["Dress", "Shirt", "T-Shirt", "Jacket"];
// let first = products.shift();
// console.log(first);
// console.log(products.toString());

// let products = ["Dress", "Shirt", "T-Shirt", "Jacket"];
// let pos = products.indexOf("Shirt");
// console.log(pos);

// let products = ["Dress", "Shirt", "T-Shirt", "Jacket"];
// let pos = products.indexOf("Blouse");
// console.log(pos);

let products = ["Dress", "Shirt", "T-Shirt", "Jacket"];
let prices = [150, 240, 55, 485];

// Add "Blouse" to the end of the products string and the price 401 to the end of the prices string.
// Add "Coat" to the beginning of the products string and the price 799 to the beginning of the prices string.
// Show the new lengths of both strings.
// Check if there is a "Jumpsuit" in the product string.
// Remove the last item from both strings (you think it's a wrong added item).
// Show which items have been removed.
// Just sort the products string alphabetically and display the result as a string.
// Create the compareNumbers(a, b) function { return a - b; }
// Sort the price string using this feature and display the lowest and highest price

products.push("Blouse");
prices.push(401);

products.unshift("Coat");
prices.unshift(799);
console.log("Products name: " + products.toString());
console.log("Prices length: " + prices);

products.indexOf("Jumpsuit") !== -1
  ? console.log("Jumpsuit is in the products list")
  : console.log("Jumpsuit is not in the products list");

let removedProduct = products.pop();
let removedPrice = prices.pop();
console.log("Removed product: " + removedProduct);
console.log("Removed price: " + removedPrice);

products.sort();
console.log("Sorted products: " + products.toString());

function compareNumbers(a, b) {
  return a - b;
}
prices.sort(compareNumbers);
console.log("Lowest price: " + prices[0]);
console.log("Highest price: " + prices[prices.length - 1]);
