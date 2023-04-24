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
const gallery = document.querySelector(".gallery__item");
const images = gallery.querySelectorAll(".gallery__image");

images.forEach((image) => {
  image.addEventListener("click", (event) => {
    event.preventDefault(); // zapobiega domyślnej akcji kliknięcia

    const imageUrl = image.getAttribute("href");

    const lightbox = basicLightbox.create(`<img src="${imageUrl}">`);
    lightbox.show();
  });
});

// Pobierz element <img>
const img = document.querySelector(".gallery__image");

// Dodaj nasłuchiwanie na kliknięcie na <img>
img.addEventListener("click", () => {
  // Utwórz nowy obiekt Lightbox z adresem URL nowego obrazu
  const lightbox = basicLightbox.create(`<img src="nowy-obraz.jpg">`);

  // Otwórz okno modalne z nowym obrazem
  lightbox.show();
});
<!-- Dodajemy znacznik dla obrazka, który będzie otwierał okno modalne -->
<img id="myImage" src="myImage.jpg" alt="My Image">

<!-- Właściwe okno modalne, ukrywane przez CSS -->
<div id="myLightbox" style="display:none;">
  <img src="" alt="">
</div>

<script>
  const imageElement = document.getElementById('myImage');
  const imageUrl = 'myImage.jpg';
  
  // Nasłuchiwanie na kliknięcie obrazka
  imageElement.addEventListener('click', function() {
    // Ustawiamy adres URL obrazka w oknie modalnym
    const lightboxImage = document.querySelector('#myLightbox img');
    lightboxImage.setAttribute('src', imageUrl);

    // Otwieramy okno modalne
    basicLightbox.create(document.querySelector('#myLightbox')).show();

    // Dodajemy nasłuchiwanie na klawiaturę
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        // Zamknij okno modalne, jeśli naciśnięto Escape
        basicLightbox.close();
      }
    });
  });
</script>