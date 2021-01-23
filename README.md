<h1>Weather Dashboard</h1> 
<p>URL: https://mpasricha1.github.io/weather_dashboard/</p>
<img src="assets/images/dashboard.png>
<h2>Overview</h2>
<h3>Technologies Used</h3> 
<ul>
	<li>Bootstrap</li>
	<li>HTML</li>
	<li>JQuery</li>
	<li>AJAX</li>
	<li>CSS</li>
</ul>
<h3>Objective</h3>
<p>The objective of this assignment was to create a weather dashboard that displays the current weather and a 5 day forcast using the Openweather API. A user is able to search for a city 
and the current weather for the day as well as the 5 day forcast is displayed on the page. Also the users previous searches are stored on the side bar and a user can click a previous search
to jump back to that cities weather report. The UV Index is also color coded for favorable, moderate and severe. 
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
<h3>Files</h3>
<h4>HTML</h4> 
<ul>
	<li>index.html</li>
</ul> 
<p>This is the only html page for the app. This file contains all the code for the page and has dynamically created content.On the page is a second for the search box as well as the 
previous search. The current weather forcast and a final box for 5 weather forcast</p>
<h4>Javascript</h4> 
<ul>
	<li>script.js</li>
</ul>
<p>There is one javascript file as well that handles all the api calls and dynamically creating all the content on the page. Ajax was used to handle all the api calls, there are three functions 
that use AJAX: getOneDayData, getFiveDayDate and getUVData. Each one of these has its own AJAX Get request that pulls data from the open weather API then renders the information on that page</p> 
<p>There are few other helper functions that perform various tasks on the page such as loading the last searched city when the page is loaded and rendering it to the page, storing date and various 
conversion functions that covert the temp and date formats.</p>




