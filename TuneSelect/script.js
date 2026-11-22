
"use strict";

// Instrument collection
const instrumentsArr = [
  { category: "woodwinds", instrument: "Flute", price: 500, icon: "🎶" },
  { category: "woodwinds", instrument: "Clarinet", price: 200, icon: "🎵" },
  { category: "woodwinds", instrument: "Oboe", price: 4000, icon: "🎼" },
  { category: "brass", instrument: "Trumpet", price: 200, icon: "🎺" },
  { category: "brass", instrument: "Trombone", price: 300, icon: "🎺" },
  { category: "brass", instrument: "French Horn", price: 4300, icon: "🎺" },
  { category: "percussion", instrument: "Drum Set", price: 500, icon: "🥁" },
  { category: "percussion", instrument: "Xylophone", price: 3000, icon: "🎼" },
  { category: "percussion", instrument: "Cymbals", price: 200, icon: "🥁" },
  { category: "percussion", instrument: "Marimba", price: 3000, icon: "🎵" }
];

// DOM elements
const selectContainer = document.querySelector("#category-filter");
const productsContainer = document.querySelector(".products-container");
const productCount = document.querySelector("#product-count");

// Generate instrument cards
function instrumentCards(instrumentCategory) {
  const instruments =
    instrumentCategory === "all"
      ? instrumentsArr
      : instrumentsArr.filter(
          ({ category }) => category === instrumentCategory
        );

  productCount.textContent =
    `${instruments.length} ${instruments.length === 1 ? "Instrument" : "Instruments"}`;

  return instruments.map(({ category, instrument, price, icon }) => {
    return `
      <article class="card">
        <div class="card-icon" aria-hidden="true">${icon}</div>
        <h2>${instrument}</h2>
        <p class="card-category">${category}</p>
        <p class="card-price">$${price.toLocaleString("en-US")}</p>
      </article>
    `;
  }).join("");
}

// Display all instruments initially
productsContainer.innerHTML = instrumentCards("all");

// Filter instruments when the category changes
selectContainer.addEventListener("change", () => {
  productsContainer.innerHTML = instrumentCards(selectContainer.value);
});
