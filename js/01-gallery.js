import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery__list");
for (const galleryItem of galleryItems) {
}

const links = document.querySelectorAll(".gallery__link");
//zablokuje domyślne zachowanie kliknięcia na linku
links.forEach((link) =>
  link.addEventListener("click", (event) => {
    event.preventDefault();
  })
);

const gallery = document.querySelector(".gallery__item");
// Pobieram elementy <img>
const images = gallery.querySelectorAll(".gallery__image");

images.forEach((image) => {
  // Dodaję nasłuchiwanie na kliknięcie na <img>
  image.addEventListener("click", (event) => {
    event.preventDefault(); // zapobiega domyślnej akcji kliknięcia

    // Utwórz nowy obiekt Lightbox z adresem URL nowego obrazu
    const imageUrl = image.getAttribute("href");

    const lightbox = basicLightbox.create(`<img src="${imageUrl}">`);
    // Otwórz okno modalne z nowym obrazem
    lightbox.show();
  });
});

// Dodajemy nasłuchiwanie na klawiaturę
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    // Zamknij okno modalne, jeśli naciśnięto Escape
    lightbox.close();
  }
});
