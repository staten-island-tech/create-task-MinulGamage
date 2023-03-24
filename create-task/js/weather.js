import { DOMSelectors } from "./DOM";
import "../styles/style.css";

const url = "https://goweather.herokuapp.com/weather/";

DOMSelectors.button.addEventListener("click", function (event) {
  event.preventDefault();

  function removeCards() {
    DOMSelectors.card.innerHTML = DOMSelectors.clear;
  }

  const history = [];
  console.log(history);

  const city = DOMSelectors.input.value;

  const cityUrl = url + city;
  history.push(cityUrl);

  fetch(cityUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      removeCards();
      DOMSelectors.card.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="card" id="api-response">
        <h2 class="description">Weather in ${DOMSelectors.input.value} is ${data.description}</h2>
        <h3 class="temperature"> ${data.temperature}</h3>
        <h3 class= "wind">Wind Speed: ${data.wind}</h3>
        <h3 class="forecast"> Forecast: ${data.forecast}</h3>
        <button id="change">Change Degrees F/C</button>
        </div>`
      );
      clearInput();
    })
    .catch(
      (error) =>
        (DOMSelectors.card.innerHTML = `<h3> Cannot find the region you are looking for. Try checking spelling</h3>`)
    );

  function clearInput() {
    DOMSelectors.input.value = "";
  }
});
