import { DOMSelectors } from "./DOM";

const url = "https://goweather.herokuapp.com/weather/";

DOMSelectors.button.addEventListener("click", function (event) {
  event.preventDefault();

  function clear() {
    if (DOMSelectors.card) {
      DOMSelectors.card.remove();
    }
  }

  const city = DOMSelectors.input.value;

  const cityUrl = url + city;

  fetch(cityUrl)
    .then((response) => response.json())
    .then((data) => {
      DOMSelectors.card.insertAdjacentHTML(
        "beforeend",
        `
        <div class="card" id="api-response">
        <h2>Weather in ${DOMSelectors.input.value} is ${data.description}</h2>
        <h3>Temperature: ${data.temperature}</h3>
        <h3>Wind Speed: ${data.wind}</h3>
        </div>`
      );
    })
    .catch(
      (error) =>
        (DOMSelectors.card.innerHTML = `<h3> Cannot find the region you are looking for. Try checking spelling</h3>`)
    );
});
