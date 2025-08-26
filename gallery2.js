// Back link
const backLink = document.createElement("a");
backLink.href = "portfolio.html";
backLink.textContent = "< Back to Themes";
backLink.classList.add("back-link");
document.body.insertBefore(backLink, document.body.firstChild);

// Theme data: easy to add/remove collections
const themes = {
  dessert: {
    title: "Fruit + Dessert Earrings",
    items: [
      {src: "images/dessert_1.png", price: "$2.50"},
      {src: "images/dessert_2.png", price: "$3"},
      {src: "images/dessert_3.png", price: "$3"},
      {src: "images/dessert_4.png", price: "$6"},
      {src: "images/dessert_5.png", price: "$6"},
      {src: "images/creamsicle.png", price: "$4"},
      {src: "images/dessert6.png", price: "$2"},
      {src: "images/dessert_7.png", price: "$2"},
      {src: "images/dessert_8.png", price: "$3"}

    ]
  },
  celestial: {
    title: "Celestial Earrings",
    items: [
      {src: "images/celestial_1.png", price: "$4"},
      {src: "images/star.png", price: "$2"},
      {src: "images/planet.png", price: "$2"},
      {src: "images/celestial2.png", price: "$2"},
      {src: "images/celestial3.png", price: "$2"},
      {src: "images/celestial4.png", price: "$8"}
  
    ]
  },

  spring: {
    title: "Spring Earrings",
    items: [
      {src: "images/spring_1.png", price: "$2"},
      {src: "images/spring_2.png", price: "$2"},
      {src: "images/spring_3.png", price: "$2"},
      {src: "images/spring_4.png", price: "$2"},
      {src: "images/spring_5.png", price: "$4"},
      {src: "images/spring_6.png", price: "$2"},
      {src: "images/spring_7.png", price: "$2"}
    ]
  },
  
  sea: {
    title: "Sea Earrings",
    items: [
      {src: "images/sea_1.png", price: "$2"},
      {src: "images/sea_2.png", price: "$2"},
      {src: "images/sea_3.png", price: "$2"},
      {src: "images/sea_4.png", price: "$3"},
      {src: "images/sea_5.png", price: "$3"},
      {src: "images/sea_6.png", price: "$2"}
    ]
  },

  enchanted: {
    title: "Enchanted Forest Earrings",
    items: [
      {src: "images/enchanted_1.png", price: "$2"},
      {src: "images/enchanted_2.png", price: "$4"},
      {src: "images/enchanted_3.png", price: "$5"}
    ]
  }
  // Add more themes here...
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
