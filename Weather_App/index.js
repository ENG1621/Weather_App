let API_KEY = "7cb17c4aa98768b87e351561f6a9a4d7";
let result = document.querySelector("#result");
let searchBtn = document.querySelector("#search-btn");
let cityRef = document.querySelector("#city");


let getweather = () => {
  let cityValue = cityRef.value;

  if (cityValue.length == 0) {
    result.innerHTML = `<h3 class="msg">please enter a city Name</h3>` ;
}  else {
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${API_KEY}&units=metric`;

    console.log(cityValue);

    // clear the input fied

    cityRef.value = "";
    axios.get(url)
      .then((Response) => {
        let data = Response.data;
        console.log(data);
        result.innerHTML = `
        <h2> ${data.name}</h2>
        <h4 class="weather"> ${data.weather[0].main}</h4>
        <h4 class="desc"> ${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp} &#176; </h1>
        <div class="temp-container">
        <div>
        <h4 class="title">min</h4>
        <h4 class="temp">${data.main.temp_min}&#176;</h4>
        </div>
        <div>
        <h4 class="title">max</h4>
        <h4 class="temp">${data.main.temp_max}&#176;</h4>
        </div>
        </div>

        `;
      })
      .catch(() => {
        result.innerHTML = `<h3 class="msg">city not found</h3>`;
      })
  }

};
searchBtn.addEventListener("click", getweather);
window.addEventListener("load", getweather);
