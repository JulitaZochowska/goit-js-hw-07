import { galleryItems } from "./gallery-items.js";
// Change code below this line
//SimpleLightbox-biblioteka do tworzenia okien modalnych, czyli masz galerię obrazów i
//zeby kazdy obrazek wyskakiwal pojedynczo powiekszony

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
//musisz to robić w pętli i iterować po kazdym elemencie tablicy a nie odrazu wrzucac cala ogromna tablice
//zamiast tej pętli mozna uzyć metody forEach
for (const galleryItem of galleryItems) {
  const listItem = document.createElement("li");

  const a = document.createElement("a");
  a.classList.add("gallery__item");
  a.href = galleryItem.preview;

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = galleryItem.preview;
  img.alt = galleryItem.description;

  a.appendChild(img);
  listItem.appendChild(a);
  galleryList.appendChild(listItem);
}
//(.gallery a, a jest potomkiem elementu o klasie gallery
//tworzenie okna modalnego
let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});
//sprawdzenie, czy jest jakiś błąd
gallery.on("error.simplelightbox", function (e) {
  console.log(e); // some usefull information
});
