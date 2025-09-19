// Back link
const backLink = document.createElement("a");
backLink.href = "phonecharms.html";
backLink.textContent = "< Back to Themes";
backLink.classList.add("back-link");
document.body.insertBefore(backLink, document.body.firstChild);

// Theme data with prices
const themes = {
  pokemon: {
    title: "Pokemon Phone Charms",
    items: [
      { src: "images/pokemon_mew.png", price: "$8" },
      { src: "images/pokemon_rockruff.png", price: "$8" },
      { src: "images/pokemon_rowlet.png", price: "$8" },
      { src: "images/pokemon_snorlax.png", price: "$8" },
      { src: "images/pumpkaboo.png", price: "$8" },
      { src: "images/pokemon_piplup.png", price: "$8" },
      { src: "images/pokemon_mimikyu.png", price: "$8" },
      { src: "images/pokemon_umbreon.png", price: "$8" },
      { src: "images/pokemon_oshawott.png", price: "$8" },
      { src: "images/pokemon_morpeko.png", price: "$8" },
      { src: "images/pokemon_litwick.png", price: "$8" },
      { src: "images/pokemon_ralts.png", price: "$8" },
      { src: "images/pokemon_jolteon.png", price: "$8" },
      { src: "images/pokemon_teddirusa.png", price: "$8" },
      { src: "images/pokemon_espeon.png", price: "$8" },
      { src: "images/pokemon_flaffy.png", price: "$8" },
      { src: "images/pokemon_pachirisu.png", price: "$8" },
      { src: "images/pokemon_espurr.png", price: "$8" },
      { src: "images/pokemon_victini.png", price: "$8" },
      { src: "images/pokemon_squirtle.png", price: "$8" },
      { src: "images/pokemon_charmander.png", price: "$8" },
      { src: "images/pokemon_bulbasaur.png", price: "$8" },
      { src: "images/pokemon_eevee.png", price: "$8" },
      { src: "images/pokemon_togedemaru.png", price: "$8" }
    ]
  },
  fruit: {
    title: "Fruit Phone Charms",
    items: [
      { src: "images/fruit_peach.png", price: "$5" },
      { src: "images/fruit_blueberry.png", price: "$4" },
      { src: "images/fruit_blueberry2.png", price: "$4" },
      { src: "images/fruit_strawberry.png", price: "$4" },
      { src: "images/fruit_strawberry2.png", price: "$4" }
    ]
  },
  // Add more themes here...
  pdessert: {
    title: "Dessert Phone Charms",
    items: [
      { src: "images/pdessert_1.png", price: "$7" },
      { src: "images/pdessert_2.png", price: "$7" },
      { src: "images/pdessert_3.png", price: "$7" },
      { src: "images/pdessert_4.png", price: "$7" },
      { src: "images/pdessert_5.png", price: "$7" },
      { src: "images/pdessert_6.png", price: "$7" },
      { src: "images/pdessert_7.png", price: "$7" },
      { src: "images/gummyshark1.png", price: "$7" }
    ]
  },

    friend: {
    title: "Friendship Phone Charms",
    items: [
      { src: "images/friend_1.png", price: "$16" },
      { src: "images/friend_2.png", price: "$16" },
      { src: "images/friend_3.png", price: "$16" },
      { src: "images/friend_4.png", price: "$16" }
    ]
  }
  
};

// Get theme name from URL (e.g., ?theme=night)
const params = new URLSearchParams(window.location.search);
const themeName = params.get("theme");

// Get elements
const titleEl = document.getElementById("gallery-title");
const galleryEl = document.getElementById("gallery-container");

// Load theme data if it exists
if (themeName && themes[themeName]) {
  titleEl.textContent = themes[themeName].title;

  themes[themeName].items.forEach(item => {
    const container = document.createElement("div");
    container.classList.add("gallery-item");

    const img = document.createElement("img");
    img.src = item.src;

    const price = document.createElement("p");
    price.textContent = item.price;
    price.classList.add("price");

    container.appendChild(img);
    container.appendChild(price);
    galleryEl.appendChild(container);
  });
} else {
  titleEl.textContent = "Theme Not Found";
}
