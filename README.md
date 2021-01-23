#Weather Dashboard 
URL: https://mpasricha1.github.io/weather_dashboard/
![dashboard](/assets/images/dashboard.png)
##Overview
###Technologies Used 
 *Bootstrap
 *HTML 
 *JQuery
 *AJAX
 *CSS

###Objective
The objective of this assignment was to create a weather dashboard that displays the current weather and a 5 day forcast using the Openweather API. A user is able to search for a city 
and the current weather for the day as well as the 5 day forcast is displayed on the page. Also the users previous searches are stored on the side bar and a user can click a previous search
to jump back to that cities weather report. The UV Index is also color coded for favorable, moderate and severe. 
###API Used
URL https://openweathermap.org/api
####Endpoints used
 *https://openweathermap.org/current
 *https://openweathermap.org/forecast5
 *https://openweathermap.org/api/uvi

Three end points were used to gather all the date needed for this assignment. The first was the current weather endpoint. This is used to get the current weather from the selected city.
The second endpoint was used to get the five day weather report for the selected city. The final endpoint used was the uv index endpoint.

The selected city is used as a parameter for the API call, once the data is returned, the lat and lon are taken from the returned data and used as the parameters for the UV Index endpoint.
###Files
####HTML 
 *index.html

This is the only html page for the app. This file contains all the code for the page and has dynamically created content.On the page is a second for the search box as well as the 
previous search. The current weather forcast and a final box for 5 weather forcast
####Javascript 
 *script.js

There is one javascript file as well that handles all the api calls and dynamically creating all the content on the page. Ajax was used to handle all the api calls, there are three functions 
that use AJAX: getOneDayData, getFiveDayDate and getUVData. Each one of these has its own AJAX Get request that pulls data from the open weather API then renders the information on that page

There are few other helper functions that perform various tasks on the page such as loading the last searched city when the page is loaded and rendering it to the page, storing date and various 
conversion functions that covert the temp and date formats.




