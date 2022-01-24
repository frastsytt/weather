class Weather{
	constructor(city){
		this.key = "92a629b34a977a36d03269c986372045";
		this.city = city;
	}
	async getWeather(){
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)		
		const responseData = await response.json()
		return responseData
	}
	changeCity(city){
		this.city = city;
	}
}