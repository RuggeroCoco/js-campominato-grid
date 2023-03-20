// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

document.getElementById("spown-grid").addEventListener("click", startGame);

function startGame() {
  const level = parseInt(document.querySelector("select").value);
  let cellsNumber;
  switch (level) {
    case 1:
      cellsNumber = 100;
      break;
    case 2:
      cellsNumber = 81;
      break;
    case 3:
      cellsNumber = 49;
      break;
    default:
      cellsNumber = 100;
  }
  console.log(cellsNumber);

  const gridElem = document.querySelector(".grid");
  const introText = document.querySelector("h2");
  introText.classList.add("hidden");
  gridElem.classList.remove("hidden");
  gridElem.innerHTML = "";

  for (let i = 1; i <= cellsNumber; i++) {
    const newElem = createGridElem(i, Math.sqrt(cellsNumber));
    newElem.addEventListener("click", handleCellClick);
    gridElem.append(newElem);
  }
}

/**
 * Description
 * @param {string || number} content
 * @param {number} cellSize
 * @returns {object}
 */

function createGridElem(content, cellSize) {
  const gridElem = document.createElement("div");
  gridElem.classList.add("grid-item");
  gridElem.style.width = `calc(100% / ${cellSize})`;
  gridElem.style.height = `calc(100% / ${cellSize})`;
  gridElem.innerHTML = `<span>${content}</span>`;
  return gridElem;
}

function handleCellClick() {
  this.classList.add("clicked");
  const clickedNumber = parseInt(this.querySelector("span").textContent);
  console.log(clickedNumber);
}
