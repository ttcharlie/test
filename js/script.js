let wd;

function render(response){
  var currentLocation = response.name;
  var currentWeather = response.weather[0].description;
  var currentTemp = response.main.temp;
  var high = response.main.temp_max;
  var low = response.main.temp_min;
  
  $("#local").html(currentLocation);
  $("#temperatura").html(currentTemp);
  $("#high").html("High: " + high);
  $("#low").html("Low: " + low);

  if(currentTemp > 0){
    $("body").css("background", "navy")
  }
}


$(function(){
  var loc;
  $.getJSON('https://ipinfo.io', function(ipAddress){
   console.log(ipAddress)
   loc = ipAddress.loc.split(",");
   console.log(loc);

    //  https://fcc-weather-api.glitch.me
    $.getJSON(
      'https://fcc-weather-api.glitch.me/api/current?units=imperial&lat=' + loc[0] + '&lon=' + loc[1],function (response){
        wd = response;
        console.log(response)
        // https://openweathermap.org/weather-conditions
        // https://openweathermap.org/img/wn/10d@2x.png
        // var iconTemp = "https://openweathermap.org/img/wn/" + response.weather[1].icon + "@2x.png";
        // $('#icon').prepend('<img src=' + iconTemp + ' >')  
        render(response);
    })
  });
})