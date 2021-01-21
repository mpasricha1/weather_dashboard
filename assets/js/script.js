var APIKey = "2b4f7000607c6ae8526e73b01a82fcae";
var today = moment().format("MMMM Do YYYY");

function convertToF(temp){
	return Math.floor((temp - 273.15) * 1.80 + 32);
}
function getUVData(lat, lon){
	var queryURL = `http://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${APIKey}`

	$.ajax({
		url: queryURL, 
		method: "GET", 
		success: function(response){
			$("#uv").text(`UV Index:${response.value}`);
		}
	});
}

function getOneDayData(city){
	var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
	$.ajax({
      	url: queryURL,
      	method: "GET", 
      	success: function(response){
	      	var latCoord = response.coord.lat; 
	    	var lonCoord = response.coord.lon;

	    	getUVData(latCoord, lonCoord);

	    	$("#city").html(`${response.name} ${today} <img src=https://openweathermap.org/img/w/${response.weather[0].icon}.png alt=WeatherIcon>`);
	    	$("#temp").html(`Temperature: ${convertToF(response.main.temp)}&#176;F`);
	    	$("#humid").text(`Humidity: ${response.main.humidity}%`); 
	    	$("#wind").text(`Wind Speed: ${response.wind.speed} MPH`); 
      	}
    });
}

function getFiveDayData(city){
	var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`

	$.ajax({
		url:queryURL, 
		method: "GET", 
		success: function(response){
			console.log(response);
		}
	})
}

$(".searchbtn").on("click", function(){
	var city = $("#cityname").val();
	$("#cityname").val("");

	getOneDayData(city);
	getFiveDayData(city);

})