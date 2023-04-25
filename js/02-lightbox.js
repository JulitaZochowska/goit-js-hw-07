import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const images = gallery.querySelector("gallery__images");

images.forEach((image) => {
  image.addEventListener("click", (event) => {
    event.preventDefault(); // zapobiega domyślnej akcji kliknięcia
    let gallery = new SimpleLightbox(".gallery a", {
      captionsData: "alt",
      captionDelay: "250",
    });
  });
  gallery.on("show.simplelightbox", function () {
    // do something…
  });

  gallery.on("error.simplelightbox", function (e) {
    console.log(e); // some usefull information
  });
});
