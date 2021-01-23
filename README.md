<h1>Weather Dashboard</h1> 
<p>URL: https://mpasricha1.github.io/weather_dashboard/</p>
<h2>Overview</h2>
<h3>Technologies Used</h3> 
<ul>
	<li>Bootstrap</li>
	<li>HTML</li>
	<li>Javascript</li>
	<li>CSS</li>
<ul>
<h3>Objective</h3>
<p>The objective of this assignment was to create a weather dashboard that displays the current weather and a 5 day forcast using the Openweather API. A user is able to search for a city 
and the current weather for the day as well as the 5 day forcast is displayed on the page. Also the users previous searches are stored on the side bar and a user can click a previous search
to jump back to that cities weather report. 
<h3>API Used</h3>
<p>URL https://openweathermap.org/api</p>
<h4>Endpoints used</h4>
<ul>
	<li>https://openweathermap.org/current</li>
	<li>https://openweathermap.org/forecast5</li>
	<li>https://openweathermap.org/api/uvi</li>
</ul>
<p>Three end points were used to gather all the date needed for this assignment. The first was the current weather endpoint. This is used to get the current weather from the selected city.
The second endpoint was used to get the five day weather report for the selected city. The final endpoint used was the uv index endpoint.</p> 
</p>The selected city is used as a parameter for the API call, once the data is returned, the lat and lon are taken from the returned data and used as the parameters for the UV Index endpoint.</p>




