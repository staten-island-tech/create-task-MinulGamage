import "../styles/style.css";
import { DOMSelectors } from "./DOM";

/* async function fetchData(url) {
  const response = await fetch(url);
  const object = await response.json();
  const Data = object.message;
  const temperature = Object.keys(Data);
  console.log(temperature);
} */
DOMSelectors.button.addEventListener("click", async function fetchData(event) {
  try {
    let x = DOMSelectors.input.value.toLowerCase();
    const response = await fetch(
      `https://goweather.herokuapp.com/weather/${DOMSelectors.input.value}`
    );
    const object = await response.json();
    return object.message;
  } catch (error) {
    console.log(error);
    clear();
    DOMSelectors.card.innerHTML = `<h3> Cannot find the region you are looking for. Try checking spelling</h3>`;
  }
  event.preventDefault();
});

function insertHTML() {
  DOMSelectors.card.insertAdjacentHTML(
    "beforeend",
    `
        <div class="card" id="api-response">
        <h2>Weather in ${DOMSelectors.input} is ${description}</h2>
        <h3>${temperature}</h3>
        <h3>${wind}</h3>
        </div>`
  );
}

function clearInput() {
  DOMSelectors.input.innerHTML = "";
}
