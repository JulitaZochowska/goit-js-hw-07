import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const link = document.querySelectorAll(".gallery__link");
//zablokuje domyślne zachowanie kliknięcia na linku
link.addEventListener("click", (event) => {
  event.preventDefault();
});
const gallery = document.querySelector(".gallery__item");
gallery.addEventListener("click", (event) => {
  if (event.target.tagName === "img") {
    //sprawdza czy kliknięty element jest obrazem
    const fullURL = event.target.dataset.source; //pobiera wartość atrybutu data-source, który
    //zawiera URL do duzego obrazu.
    window.open(fullURL, "_blank"); //otwiera większy obraz w nowej karcie
  }
});
