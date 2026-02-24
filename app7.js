/* let n = parseFloat(prompt("Enter a number:"));
let total = 0;
console.time("time");

for (let i = 0; i <= n; i++) {
  if (i % 2 === 0) {
    total += i;
  }
}
console.timeEnd("time");
console.log("Sum of numbers from 0 to " + n + " is: " + total);

for (let i = 0; i <= n; i++) {
  total += i;
}

console.timeEnd("time");
console.log("Sum of numbers from 0 to " + n + " is: " + total); */

/* let minPrice = 0;
let maxPrice = 1000;

let costomerCart = parseFloat(prompt("Enter the price of the product:"));

for (let i = 1; i <= costomerCart; i++) {
  let price = parseFloat(prompt(`Enter the price of product ${i}:`));

  if (price > minPrice && price < maxPrice) {
    console.log(`Price of product ${i} is valid.`);
  }
  if (price < maxPrice) {
    maxPrice = price;
  }
}

document.writeln("Minimum price: " + minPrice + "<br>");
document.writeln("Maximum price: " + maxPrice); */

/* let x = 0;
let y = 0;
let n = parseFloat(prompt("Enter a number:"));

while (x <= n) {
  document.writeln("<br> este " + x);
  x++;
}
do {
  document.writeln("<br> este " + y);
  y++;
} while (y <= n); */

document.writeln("natural number higher than 0 ald lower than 10: <br>");

for (let i = 1; i < 10; i++) {
  document.writeln(i + "<br>");
}

let a = 7;
let b = 3;
let c = 5;
let d = 2;

if (a > b) {
  let aux = a;
  a = b;
  b = aux;
}

if (b > c) {
  let aux = b;
  b = c;
  c = aux;
}

if (c > d) {
  let aux = c;
  c = d;
  d = aux;
}

console.log(`total number are ${a} ${b} ${c} ${d}`);
