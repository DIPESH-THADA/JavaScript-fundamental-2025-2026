// const fname = prompt("Enter your name:");
// const password = prompt("Enter your password:");

// if (fname === "admin" && password === "admin1234") {
//   alert("Welcome admin");
// } else {
//   alert("Invalid credentials");
// }

// let tipUtilizator = "premium";
// if (tipUtilizator == "premium") {
//   console.log("Felicitări! Aveți 20% reducere.");
// } else {
//   console.log("Din păcate, momentan nu beneficiați de reducere.");
// }

// const priceAmount = prompt("Enter the price amount:");

// if (priceAmount < 500) {
//   alert("you have to pay 50 lei shipping cost also");
// } else if (priceAmount > 500) {
//   alert("you have free shipping");
// } else {
//   alert(
//     "purchase the items to find out if you have to pay shipping cost or not",
//   );
// }

// const metalName = prompt("Enter the name that you want to search for:");

// if (metalName === "gold") {
//   alert("Congratulation you got 10% extra discount on gold");
// } else if (metalName === "silver") {
//   alert("Congratulation you got 5% extra discount on silver");
// } else {
//   alert("Sorry, the name you entered is not available.");
// }

// function validate() {
//   const user = document.getElementById("user");
//   const pass = document.getElementById("pass");
//   // 1) Verificare dacă câmpurile sunt completate
//   if (!user.value || !user.value.trim()) {
//     window.alert("Introduceți numele de utilizator.");
//     return;
//   }
//   if (!pass.value || !pass.value.trim()) {
//     window.alert("Introduceți parola.");
//     return;
//   }
//   // În aplicațiile reale, aceste verificări se fac pe server; aici este doar o demonstrație:
//   const VALID_USER = "admin";
//   const VALID_PASS = "secret123";
//   if (user.value === VALID_USER && pass.value === VALID_PASS) {
//     window.alert("Autentificare reușită!");
//   } else {
//     window.alert("Nume de utilizator sau parolă greșite.");
//   }
// }

let deliveryOption = "express"; // utilizatorul alege "standard", "express" sau "pickup"
switch (deliveryOption) {
  case "standard":
    console.log("Livrare standard: 50 lei, ajunge în 3-5 zile.");
    break;
  case "express":
    console.log("Livrare expres: 100 lei, ajunge mâine.");
    break;
  case "pickup":
    console.log("Ridicare din magazin: gratuit.");
    break;
  default:
    console.log("Opţiune de livrare necunoscută.");
    break;
}

// Write a formatPrice(amount, currency) function that returns a string with the correctly formatted price, depending on the currency chosen.
// For this exercise, use the fixed rates:
// 1 EUR = 5 RON
// 1 USD = 4 RON
// The input values for the function are:
// amount – number expressed in RON;
// currency – "RON", "EUR" or "USD" (string).
// Output: string with price and currency:
// "RON" → "<amount>RON" (no conversion, no decimals);
// "EUR" → €<valoare_în_euro> (Conversion amount / 5, rounded to 2 decimal places);
// "USD" → $ (conversion amount / 4, rounded to 2 decimal places);
// Any other value for currency → returns only the amount as a string (without currency).
// It is mandatory to use switch (currency). For rounding to 2 decimal places, use .toFixed(2).

// function formatptice(amount, currency) {
//   switch (currency) {
//     case "RON":
//       console.log(`${amount} RON`);
//       return `${amount} RON`;
//     case "EUR":
//       console.log(`€${(amount / 5).toFixed(2)}`);
//       return `€${(amount / 5).toFixed(2)}`;
//     case "USD":
//       console.log(`$${(amount / 4).toFixed(2)}`);
//       return `$${(amount / 4).toFixed(2)}`;
//     default:
//       return `${amount}`;
//   }
// }

// formatptice(100, "RON");
// formatptice(100, "EUR");
// formatptice(100, "USD");
// formatptice(100, "GBP");

// Show the user the payment options through the function prompt():
// card → commission of 0.5% of the total order value,
// code → fixed commission of 12 lei,
// paypal → commission of 2% of the total order value.
// After the user chooses an option, ask them to enter the total value of the order.
// Using the switch command, calculate and display the commission according to the chosen payment method.
// If the user enters a non-existent payment option, display the message: "Invalid payment option."

/* const showCategory = () => {
  const productType = document.getElementById("productType").value;
  const orderValue = parseFloat(
    prompt("Enter the total value of the order in RON:"),
  );

  let commission;

  switch (productType) {
    case "1": //card
      commission = orderValue * 0.05;
      alert(`Commission for card payment: ${commission.toFixed(2)} RON`);
      break;

    case "2": //code
      commission = 12;
      alert(`Commission for code payment: ${commission.toFixed(2)} RON`);
      break;

    case "3": //paypal
      commission = orderValue * 0.02;
      alert(`Commission for paypal payment: ${commission.toFixed(2)} RON`);
      break;

    default:
      alert("Invalid payment option.");
  }
}; */

/* let price = 0;
let deleveryOption =
  price > 500
    ? "you have t pay 30 lei shipping cost also"
    : "you have free shipping";
console.log(deleveryOption);

for (var i = 0; i < 100; i++) {
  if (i > 50) {
    continue;
  }
  console.log(i);
}
console.log(i);
 */
/* let produseÎnCoș = [
  {
    nume: "Adidași",
    preț: 50,
    epuizat: false,
  },
  {
    nume: "Tricou",
    preț: 20,
    epuizat: true,
  },
  {
    nume: "Şort",
    preț: 25,
    epuizat: false,
  },
  {
    nume: "Geacă",
    preț: 100,
    epuizat: true,
  },
];
for (let i = 0; i < produseÎnCoș.length; i++) {
  if (produseÎnCoș[i].epuizat) {
    continue;
    // sari peste produsele epuizate
  }
  console.log(produseÎnCoș[i].nume + " - " + produseÎnCoș[i].preț + "€");
}

for (var i = 0; i < 100; i++) {
  if (i > 50) {
    break;
  }
  console.log(i);
}
console.log(i); */

/* let produseÎnCoș = [
  { nume: "Adidași", preț: 50, epuizat: false },
  {
    nume: "Tricou",
    preț: 20,
    epuizat: true,
  },
  {
    nume: "Șort",
    preț: 25,
    epuizat: false,
  },
  {
    nume: "Geacă",
    preț: 100,
    epuizat: true,
  },
];
for (let i = 0; i < produseÎnCoș.length; i++) {
  if (produseÎnCoș[i].epuizat) {
    console.log("Produs epuizat găsit: " + produseÎnCoș[i].nume);
    break; // oprim bucla la primul produs epuizat
  }
  console.log(produseÎnCoș[i].nume + " - " + produseÎnCoș[i].preț + "€");
}
console.log("Procesarea produselor a fost oprită.");
 */

// Write the checkPassword() function that:
// Ask the user to enter the password promptly.
// allows a maximum of 3 attempts.
// •
// Break logic
// If the user enters the correct password (admin12345), it displays the message "Welcome" and stops the loop (break).
// If the user enters the wrong password, it displays the message "Password was not entered correctly; please try again," and the loop moves on to the next attempt.
// After 3 unsuccessful attempts, it displays the message "The account is temporarily locked."

function checkPassword() {
  const MAX_ATTEMPTS = 3;
  const CORRECT_PASSWORD = "admin12345";

  for (let attemp = 1; attemp <= MAX_ATTEMPTS; attemp++) {
    const userInput = prompt("Enter your password:");

    if (userInput === CORRECT_PASSWORD) {
      alert("welcome back admin");
      break;
    } else {
      if (attemp === MAX_ATTEMPTS) {
        alert("The account is temporarily locked.");
      } else {
        alert("Password was not entered correctly; please try again.");
      }
    }
  }
}

checkPassword();
