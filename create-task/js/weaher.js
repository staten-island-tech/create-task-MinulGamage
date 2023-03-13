import { DOMSelectors } from "./DOM";

const url = "https://goweather.herokuapp.com/weather/";

DOMSelectors.button.addEventListener("click", function (event) {
  event.preventDefault();

  let city = Searchinput.value;

  let cityUrl = url + city;

  async function datafetch(cityUrl) {
    try {
      let response = await fetch(cityUrl);
      let data = await response.json();
      let array = Object.values(data).then((data) => {
        const weatherData = data["temperature"] + "°C " + data["description"];
        const apiResponseDiv = document.getElementById("api-response");
        apiResponseDiv.innerHTML = weatherData;
      });
    } catch (error) {
      DOMSelectors.card.innerHTML = `<h3> Cannot find the region you are looking for. Try checking spelling</h3>`;
    }
  }
  datafetch(cityUrl);

  function clearInput() {
    DOMSelectors.input.innerHTML = "";
    return clearInput;
  }
  clearInput();
});
