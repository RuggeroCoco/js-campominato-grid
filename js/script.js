// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

const grid = document.querySelector(".grid");
const spownGridBtn = document.getElementById("spown-grid");
spownGridBtn.addEventListener("click", spowngrid);

function spowngrid() {
  if (document.querySelector(".grid").childElementCount > 0) {
  } else {
    for (let i = 1; i <= 100; i++) {
      const currentNumber = i;
      const newItem = generateGridItem(currentNumber);
      newItem.addEventListener("click", handleItemClick);
      grid.append(newItem);
    }
  }
}

function generateGridItem(text) {
  const newSquare = document.createElement("div");
  newSquare.classList.add("grid-item");
  newSquare.innerHTML = `<span>${text}</span>`;
  return newSquare;
}

function handleItemClick() {
  this.classList.toggle("click");
}
