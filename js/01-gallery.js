import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

//tworzymy tylko JEDEN obiekt lightbox, bo jest drogi :)
//tworzymy na początku, aby był dostępny globalnie
//metoda do tworzenia lightboxa z internetu
const lightbox = basicLightbox.create("");

//Uwaga!Nie dodajesz juz niczego ręcznie do HTML!!!
//Tworzymy naszego HTML
for (const galleryItem of galleryItems) {
  //tworzymy znacznik <li>
  const listItem = document.createElement("li");
  //tworzymy znacznik <div>
  const div = document.createElement("div");
  //dodajemy klasę do taga <div>
  div.classList.add("gallery__item");
  //tworzymy znacznik <a>
  const a = document.createElement("a");
  //dodajemy klasę do znacznika <a>
  a.classList.add("gallery__link");
  //przypisujemy ściekę do taga <a> (pochodzi z gallery-items.js)
  a.href = galleryItem.original;

  // dodajemy event listener tutaj, bo nie ma sensu brac go z HTML za pomoca document.getElement/querySelector
  // skoro mamy do niego dostep tutaj. Operacja getElement/querySelector jest "droga"
  // i jezeli mozna, powinno sie jej unikac
  //addEventListener ustawiamy zawsze na pojedynczym elemencie!!!
  //wszystkie operacje robimy na <a> a nie na <img> mimo, ze <img> tez zawiera sciezke w data-source!!!, bo zawsze
  //klikamy w link
  a.addEventListener("click", (event) => {
    //zablokuje domyślne zachowanie kliknięcia na linku
    event.preventDefault();

    // ustawiamy jedynie "treść" lightboxa (funcja element() zwraca uchwyt do kontenera okna modalnego)
    // a po ustawieniu treści - duzego obrazka - wyświetlamy
    // jakby uzyc metody create() do lightboxa tutaj, to tworzylibysmy nowy obiekt lightbox za kazdym razem
    // jak klikniemy, co mogloby zapchac pamiec - tzw. memory leak
    lightbox.element().innerHTML = `<img src="${galleryItem.original}" alt="${galleryItem.description}" />`;
    //wyświetlamy okno modalne
    lightbox.show();
  });

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = galleryItem.preview;
  img.dataset.source = galleryItem.original;
  img.alt = galleryItem.description;

  //dodajemy <img> jako dziecko <a>
  a.appendChild(img);
  //dodajemy <a> jako dziecko <div>
  div.appendChild(a);
  //dodajemy <div> jako dziecko <li>
  listItem.appendChild(div);
  //dodajemy <li> jako dziecko <ul>
  galleryList.appendChild(listItem);
}

// Dodajemy nasłuchiwanie na klawiaturę, zamknięcie z klawiatury
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    // Zamknij okno modalne, jeśli naciśnięto Escape
    lightbox.close();
  }
});
