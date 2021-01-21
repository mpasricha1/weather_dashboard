var APIKey = "2b4f7000607c6ae8526e73b01a82fcae";
var today = moment().format("MMMM Do YYYY");


$(".searchbtn").on("click", function(){
	var city = $("#cityname").val();
	var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

	$.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
    	console.log(response)
    	$("#city").html(`${response.name} ${today} <img src=https://openweathermap.org/img/w/${response.weather[0].icon}.png alt=WeatherIcon>`);
    	$("#temp").html(`Temperature: ${Math.floor((response.main.temp - 273.15) * 1.80 + 32)}&#176;F`);
    	$("#humid").text(`Humidity: ${response.main.humidity}%`); 
    	$("#wind").text(`Wind Speed: ${response.wind.speed} MPH`); 
    });
})