let url = "http://api.weatherapi.com/v1/forecast.json?key=027fbb7829da4cedb3712901230310&q=Surabaya&aqi=no";

function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  // xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let JSONDoc = JSON.parse(xhttp.responseText);
      let cityName = JSONDoc.location.name;
      let temp = JSONDoc.current.temp_c;
      let weather = JSONDoc.current.condition.text;
      let kph = JSONDoc.current.wind_kph;
      const weatherInfo = "Location: " + cityName + "<br/>" + "Temperature: " +  temp + "°C<br/>" + "Description: " + weather + "<br/>Wind Speed: " + kph + " km/h";
      const icon = JSONDoc.current.condition.icon;
      const alt = "weather Icon";
      let image = document.getElementById("icon");
      image.src = icon; image.alt = alt;
      const weatherInfoContainer = document.getElementById("weatherContainer");
      weatherInfoContainer.innerHTML = weatherInfo;


      let cityName1 = JSONDoc.location.name;
      let temp1 = JSONDoc.forecast.forecastday[0].hour[7].temp_c;
      let weather1 = JSONDoc.forecast.forecastday[0].hour[7].condition.text;
      let kph1 = JSONDoc.forecast.forecastday[0].hour[7].wind_kph;
      const weatherInfo1 = "Location: " + cityName1 + "<br/>" + "Temperature: " +  temp1 + "°C<br/>" + "Description: " + weather1 + "<br/>Wind Speed: " + kph1 + " km/h";

      const icon1 = JSONDoc.forecast.forecastday[0].hour[7].condition.icon;
      const alt1 = "weather Icon";
      let image1 = document.getElementById("icon1");
      image1.src = icon1; image1.alt = alt1;
      const weatherInfoContainer1 = document.getElementById("weatherContainer1");
      weatherInfoContainer1.innerHTML = weatherInfo1;


      let cityName2 = JSONDoc.location.name;
      let temp2 = JSONDoc.forecast.forecastday[0].hour[19].temp_c;
      let weather2 = JSONDoc.forecast.forecastday[0].hour[19].condition.text;
      let kph2 = JSONDoc.forecast.forecastday[0].hour[19].wind_kph;
      const weatherInfo2 = "Location: " + cityName2 + "<br/>" + "Temperature: " +  temp2 + "°C<br/>" + "Description: " + weather2 + "<br/>Wind Speed: " + kph2 + " km/h";

      const icon2 = JSONDoc.forecast.forecastday[0].hour[19].condition.icon;
      const alt2 = "weather Icon";
      let image2 = document.getElementById("icon2");
      image2.src = icon2; image2.alt = alt2;
      const weatherInfoContainer2 = document.getElementById("weatherContainer2");
      weatherInfoContainer2.innerHTML = weatherInfo2;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}



loadXMLDoc();