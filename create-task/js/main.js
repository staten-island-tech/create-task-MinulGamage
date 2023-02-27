import "./style.css";
import { DOMSelectors } from "./dom";

let url = "https://goweather.herokuapp.com/weather/";

/* async function fetchData(url) {
  const response = await fetch(url);
  const object = await response.json();
  const Data = object.message;
  const temperature = Object.keys(Data);
  console.log(temperature);
} */

async function fetchData() {
  const response = await fetch(
    `https://goweather.herokuapp.com/weather/${DOMSelectors.input.value}`
  );
}

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
