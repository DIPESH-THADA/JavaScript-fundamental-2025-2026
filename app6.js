"use strict";

// memorizezation (performance optimization technique)
/* 
function memorise(fn) {
  let cache = {};

  return function (n) {
    if (cache[n]) {
      console.log("Fetching from cache");
      return cache[n];
    } else {
      cache[n] = fn(n);
      console.log("Calculating result");
      return cache[n];
    }
  };
}

const square = memorise(function (n) {
  return n * n;
});

console.log(square(5)); // Calculating result, 25
console.log(square(5)); // Fetching from cache, 25
console.log(square(10)); // Calculating result, 100
console.log(square(10)); // Fetching from cache, 100 */
/* 
let cart = ["Laptop", "Mouse", "Tastatură", "Monitor", "Căști"];
for (let i = 0; i < cart.length; i++) {
  console.log("Produsul numărul " + (i + 1) + ": " + cart[i]);
} */

// Entering an integer number: numberProducts (how many items the order contains).
// With each iteration of the for loop, the price of that item (decimal number) is required.
// Example flow (in-cantilever dialog)
// "How many products have you bought?" → 3
// Iteration 1: "Enter Product Price #1:" → 59.90
// Iteration 2: "Enter Product Price #2:" → 39.50
// Iteration 3: "Enter Product Price #3:" → 12
// Display: "Total order value: 111.40 €"
// The total order value is calculated by summing the prices of all products.

/* let numberOfProducts = parseInt(prompt("How many products have you bought?"));
let totalOrderValue = 0;

for (let i = 1; i <= numberOfProducts; i++) {
  let productPrice = parseFloat(prompt("Enter Product Price #" + i + ":"));
  totalOrderValue += productPrice;
}
console.log("Total order value: " + totalOrderValue.toFixed(2) + " €"); */

/* let numărProduse = 10;
while (numărProduse > 0) {
  console.log("Produsul este în stoc. Mai sunt " + numărProduse + " bucăți.");
  numărProduse--;
}
console.log("Produsul este epuizat!"); */

/* let authenticated = false;
let tries = 0;
const MAX_TRIES = 3;
while (tries < MAX_TRIES && !authenticated) {
  let email = prompt("Introduceți e-mailul:");
  let pass = prompt("Introduceți parola (minimum 6 caractere):");
  if (email == "user" && pass == "user1234") {
    console.log("Autentificare reușită. Bine ați venit!");
    authenticated = true;
  } else {
    tries++;
    console.log("Date incorecte. Vă rugăm să încercați din nou.");
  }
}
if (!authenticated) {
  console.log("Prea multe încercări nereușite. Încercați mai târziu.");
} */

//   Inputs:
// Budget (decimal number ≥ 0)
// At each iteration:
// Item name (string) or stop to terminate;
// Item price (decimal number ≥ 0).
// In the while loop:
// If the user enters "stop", break the loop.
// If adding the item would go over budget, → display the "Go Over Budget" message and break the loop.
// Otherwise, → add the price to the total amount and increase the number of items purchased.
// At the end of the programme, display:
// the total amount of the order (rounded to 2 decimal places);
// The number of items successfully purchased.
// the remaining budget (also rounded to 2 decimal places).
// The program should handle invalid inputs (negative numbers, non-numeric values for price and budget) by prompting the user to enter valid data.

// Get and validate budget
/* let budget = parseFloat(prompt("Enter your budget (decimal number ≥ 0):"));

while (isNaN(budget) || budget < 0) {
  budget = parseFloat(
    prompt("Invalid input. Please enter a valid budget (decimal number ≥ 0):"),
  );
}

// Initialize totals OUTSIDE loop
let totalAmount = 0;
let itemCount = 0;

// Shopping loop
while (true) {
  let itemName = prompt("Enter item name (or 'stop' to finish):");

  if (!itemName) continue; // prevent empty input

  if (itemName.toLowerCase() === "stop") {
    break;
  }

  // Get and validate price
  let itemPrice = parseFloat(prompt("Enter item price (decimal number ≥ 0):"));

  while (isNaN(itemPrice) || itemPrice < 0) {
    itemPrice = parseFloat(
      prompt(
        "Invalid input. Please enter a valid item price (decimal number ≥ 0):",
      ),
    );
  }

  // Budget check
  if (totalAmount + itemPrice > budget) {
    console.log("Go Over Budget");
    break;
  }

  totalAmount += itemPrice;
  itemCount++;
}

// Final output
console.log("Total amount: " + totalAmount.toFixed(2) + " €");
console.log("Number of items purchased: " + itemCount);
console.log("Remaining budget: " + (budget - totalAmount).toFixed(2) + " €");
 */

/* let numărProduseînCoș = 3; // să zicem că utilizatorul are deja 3 produse în coș
while (numărProduseînCoș > 0) {
  console.log("Aveți " + numărProduseînCoș + " produse în coș.");
  numărProduseînCoș--;
} */

/* let numărProduseÎnCoș = 0;
do {
  console.log("Coșul dvs. este momentan gol.");
  console.log("Adăugați un produs pentru a începe cumpărăturile!");
  numărProduseÎnCoș++; // simularea adăugării primului produs
} while (numărProduseÎnCoș > 0 && numărProduseÎnCoș < 1);
console.log("Acum coșul dvs. conține " + numărProduseÎnCoș + " produse.");
 */

// Display the coupon entry dialogue at least once.
// If the coupon is valid, accept it and display a message about the discount percentage.
// If the coupon is invalid, display a message and repeat the entry.
// If the user enters "stop" or a blank string, stop checking without applying the discount.
// The final:
// If the coupon was accepted, save the discount value in a variable (for example, 0.05 or 0.10).
// If not, the discount remains 0.
// Rules:
// Input: text entered by the user (SAVE5, SAVE10 or stop/blank input for opt-out).
// Important coupons:
// SAVE5 → 5% discount and
// SAVE10 → 10% discount.
// The input must be case-insensitive (e.g., save5 is valid).
// The loop always runs at least once.

/* let discount = 0;
do {
  let coupon = prompt(
    "Enter your coupon code (SAVE5 for 5% discount, SAVE10 for 10% discount, or 'stop' to exit):",
  );

  if (!coupon) {
    console.log("No coupon entered. Exiting.");
    break;
  }
  coupon = coupon.toUpperCase();

  if (coupon === "SAVE5") {
    discount = 0.05;
    console.log("Coupon accepted! You get a 5% discount.");
  } else if (coupon === "SAVE10") {
    discount = 0.1;
    console.log("Coupon accepted! You get a 10% discount.");
  } else if (coupon === "STOP") {
    console.log("Exiting coupon entry.");
    break;
  } else {
    console.log("Invalid coupon code. Please try again.");
  }
} while (discount === 0);

console.log("Final discount applied: " + discount * 100 + "%"); */

/* try {
  console.log("Value of variable b is: " + b);
} catch (err) {
  console.log("Error name: " + err.name);
  console.log("Error message: " + err.message);
} finally {
  console.log("Hello from finally block");
}
console.log("Hello World");

try {
  console.log("Conectare la server..."); // Error simulation during payment
  throw new Error("Error processing payment!");
  console.log("Payment successful!");
} catch (err) {
  console.log("An error occurred: " + err.message);
} finally {
  console.log("Closing the connection with the server...");
}
 */

function calculateUnitPrice(totalPrice, quantity) {
  if (quantity == 0) {
    throw Error("Quantity cannot be zero");
  } else if (quantity < 0) {
    throw { name: "Invalid quantity", message: "Quantity cannot be negative." };
  } else if (quantity > 1000) {
    throw RangeError("Quantity exceeds the maximum allowed limit");
  }
  return totalPrice / quantity;
}

try {
  console.log(calculateUnitPrice(500, 0));
} catch (err) {
  console.log("Error name: " + err.name);
  console.log("Error message: " + err.message);
}
