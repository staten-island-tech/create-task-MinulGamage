import { DOMSelectors } from "./DOM";
import { displayCard } from "./weather";
import { cityUrl } from "./weather";
import "../styles/style.css";

function cardCreator() {
  cardfilter.forEach((menu) => {
    DOMSelectors.card.insertAdjacentHTML(
      "afterbegin",
      `
        <div class="card" id="api-response">
        <h2>Weather in ${DOMSelectors.input.value} is ${data.description}</h2>
        <h3>Temperature: ${data.temperature}</h3>
        <h3>Wind Speed: ${data.wind}</h3>
        <h3> Forecast: ${data.forecast}</h3>
        <button id="remove">Remove Card</button>
        <button id="change">Change Degrees F/C</button>
        </div>`
    );
  });
}
