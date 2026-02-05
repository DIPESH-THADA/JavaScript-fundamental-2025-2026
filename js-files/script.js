"use strict";

// ================= BACK TO TOP =====================
const backToTopBtn = document.querySelector(".back-to-top span");
if (backToTopBtn) {
  backToTopBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// =============== CURRENT YEAR =====================
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// ============= CHANGE COLOR WHEN CLICK ON CHECKBOX ================
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", function () {
    const zaraEl = this.closest(".zara");
    if (!zaraEl) return; // ignore checkboxes outside filter items
    const span = zaraEl.querySelector("span");
    if (!span) return;

    if (this.checked) {
      span.style.color = "#00ccdd";
      span.style.fontWeight = "500";
    } else {
      span.style.color = "#4b5563";
      span.style.fontWeight = "400";
    }
  });
});

// =============== ADD ITEM DYNAMICALLY =================
const itemContainer = document.querySelector(".product-section");

const items = [
  {
    image: "./image-icons/jens decathlons jacket.avif",
    name: "Jens Jecathlons Jacket",
    price: "$299.99",
    favorite: "./image-icons/icons-folder/heart.png",
  },

  {
    image: "./image-icons/ladies casual coat.webp",
    name: "Ladies Casual Coat",
    price: "$129.99",
    favorite: "./image-icons/icons-folder/heart.png",
  },

  {
    image: "./image-icons/t-shirt.webp",
    name: "Ladies T-shirt",
    price: "$29.99",
    favorite: "./image-icons/icons-folder/heart.png",
  },

  {
    image: "./image-icons/ladies-skirts.webp",
    name: "ladies Skirt",
    price: "$79.99",
    favorite: "./image-icons/icons-folder/heart.png",
  },

  {
    image: "./image-icons/jens-jeans.webp",
    name: "Mens Jeans",
    price: "$59.99",
    favorite: "./image-icons/icons-folder/heart.png",
  },

  {
    image: "./image-icons/top-ware.webp",
    name: "Ladies Topware",
    price: "$39.99",
    favorite: "./image-icons/icons-folder/heart.png",
  },

  {
    image: "./image-icons/mens t-shirts.webp",
    name: "Mens T-shirt",
    price: "$19.99",
    favorite: "./image-icons/icons-folder/heart.png",
  },

  {
    image: "./image-icons/mens-hoodi.webp",
    name: "Mens Hoodi",
    price: "$39.99",
    favorite: "./image-icons/icons-folder/heart.png",
  },

  {
    image: "./image-icons/mens-sweeter.jpg",
    name: "Mens Sweeter",
    price: "$44.99",
    favorite: "./image-icons/icons-folder/heart.png",
  },

  {
    image: "./image-icons/mens-leather-jacket.webp",
    name: "Mens Jeather Jacket",
    price: "$229.99",
    favorite: "./image-icons/icons-folder/heart.png",
  },

  {
    image: "./image-icons/ladies-sweeter.jpg",
    name: "ladies Sweeter",
    price: "$79.99",
    favorite: "./image-icons/icons-folder/heart.png",
  },

  {
    image: "./image-icons/mens-suede-shoe.webp",
    name: "Mens Suedue Shoe",
    price: "$89.99",
    favorite: "./image-icons/icons-folder/heart.png",
  },

  {
    image: "./image-icons/mens-shorts.webp",
    name: "Mens short",
    price: "$39.99",
    favorite: "./image-icons/icons-folder/heart.png",
  },

  {
    image: "./image-icons/mens-partyware-shoe.webp",
    name: "Mens Partyware Shoe",
    price: "$199.99",
    favorite: "./image-icons/icons-folder/heart.png",
  },

  {
    image: "./image-icons/Cheyanne - Elegant cashmere sweater for women.webp",
    name: "Cheyanne - Elegant cashmere sweater for women",
    price: "$129.99",
    favorite: "./image-icons/icons-folder/heart.png",
  },

  {
    image: "./image-icons/Franca – Refined midi dress with classic cut.webp",
    name: "Franca – Refined midi dress with classic cut",
    price: "$159.99",
    favorite: "./image-icons/icons-folder/heart.png",
  },
];

const renderItems = (items) => {
  if (!itemContainer) return; // do nothing when container is missing
  itemContainer.innerHTML = "";
  items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("product-items");
    itemDiv.innerHTML = `
      <img class="product-img" src="${item.image}" alt="${item.name}">
      <div class="details">
        <span>${item.name}</span>
        <div class="price_favorite">
          <span>${item.price}</span>
          <button class="heart"><img src="${item.favorite}" alt="add to favorite"></button>
        </div>
      </div>
      <button class="cart-btn">Add To Cart</button>
    `;
    itemContainer.appendChild(itemDiv);
  });
};

renderItems(items);
