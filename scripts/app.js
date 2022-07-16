const form = document.querySelector("form");

const card = document.querySelector(".card");

const info = document.querySelector(".info");

const DayLightSaving = document.queerySelector(".dayl-saving");

const dicon = document.querySelector(".d-icon img");

// this function update the UI

const updateUI = (data) => {
  const { cityLoc, cityWeather } = data;

  // update template

  info.innerHTML = `
        <h5 class="my-2">${cityLoc.EnglishName}</h5>
        <div class="my-2">${cityWeather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${cityWeather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

// this function updates the city inputed by user
const inputCity = async (city) => {
  // console.log(city );
  const cityLoc = await getCityDets(city);
  const cityWeather = await getCityWeather(cityLoc.Key);
  return {
    cityLoc: cityLoc,
    cityWeather: cityWeather,
  };
};

form.addEventListener("submit", (e) => {
  e.preventDefault(); // this prevents the default reload action
  const userInput = form.city.value.trim(); //gets user input
  form.reset(); //resets the input field
  inputCity(userInput)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
});
