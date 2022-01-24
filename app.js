const ls = new LS();

const weatherLocation = ls.getLocationData();

const weather = new Weather(weatherLocation);

const ui = new UI();

const form = document.querySelector("form");
form.addEventListener("submit", newCity)

function newCity(){
	const city = document.querySelector("#change-city").value;
	weather.changeCity(city);
	ls.setLocationData(city);
	getWeather();
	event.preventDefault();
	document.querySelector("#change-city").value = ""
}

function getWeather() {
	weather.getWeather()
	.then(data => {
		ui.drawWeather(data)
	})
	.catch(error => console.log(error))
}

getWeather()