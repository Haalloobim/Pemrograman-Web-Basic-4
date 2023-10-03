let url = "http://api.weatherapi.com/v1/forecast.json?key=027fbb7829da4cedb3712901230310&q=Surabaya&aqi=no";

function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  // xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var JSONDoc = JSON.parse(xhttp.responseText);
      console.log(JSONDoc);
      var cityName = JSONDoc.location.name;
      var temp = JSONDoc.current.temp_c;
      var weather = JSONDoc.current.condition.text;
      const weatherInfo = "Location: " + cityName + "<br/>" + "Temperature: " +  temp + "°C<br/>" + "Description: " + weather;
      const icon = JSONDoc.current.condition.icon;
      const alt = "weather Icon";
      let image = document.getElementById("icon");
      image.src = icon; image.alt = alt;
      const weatherInfoContainer = document.getElementById("weatherContainer");
      weatherInfoContainer.innerHTML = weatherInfo;


      var cityName1 = JSONDoc.location.name;
      var temp1 = JSONDoc.forecast.forecastday[0].hour[7].temp_c;
      var weather1 = JSONDoc.forecast.forecastday[0].hour[7].condition.text;
      const weatherInfo1 = "Location: " + cityName1 + "<br/>" + "Temperature: " +  temp1 + "°C<br/>" + "Description: " + weather1;

      const icon1 = JSONDoc.forecast.forecastday[0].hour[7].condition.icon;
      const alt1 = "weather Icon";
      let image1 = document.getElementById("icon1");
      image1.src = icon1; image1.alt = alt1;
      const weatherInfoContainer1 = document.getElementById("weatherContainer1");
      weatherInfoContainer1.innerHTML = weatherInfo1;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}



loadXMLDoc();