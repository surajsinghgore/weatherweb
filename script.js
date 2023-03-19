// enale search bar on click
const EnableSearch = () => {
  document.getElementById("searchInputSectionID").style.display = "block";
};
// close search bar on search
const closeSearchBar = () => {
  document.getElementById("searchInputSectionID").style.display = "none";
};
// search bar data fetch logic
const searchBarWork = async (e) => {
  const searhInput = document.getElementById("searhInput").value.toLowerCase();
  closeSearchBar();
  e.preventDefault();

  // api call for  fetch data

  let cityRes = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searhInput}&appid=81e9139aee341f35934fa3d450254c2f&units=metric`
  );
  // data collect for server to variable
  let resData = await cityRes.json();

  // set data to DOM
  // --------Icon Of Weather Set-------------------
  if (resData.weather[0].main.toLowerCase() == "rain") {
    document.getElementById("tempIcon").src = "./icon/rainy.svg";
  } else if (resData.weather[0].main.toLowerCase() == "haze") {
    document.getElementById("tempIcon").src = "./icon/cloudy.svg";
  } else if (resData.weather[0].main.toLowerCase() == "clouds") {
    document.getElementById("tempIcon").src = "./icon/cloudy.svg";
  } else if (resData.weather[0].main.toLowerCase() == "snow") {
    document.getElementById("tempIcon").src = "./icon/snowy.svg";
  } else if (resData.weather[0].main.toLowerCase() == "drizzle") {
    document.getElementById("tempIcon").src = "./icon/rainy.svg";
  } else if (resData.weather[0].main.toLowerCase() == "mist") {
    document.getElementById("tempIcon").src = "./icon/day.svg";
  } else if (resData.weather[0].main.toLowerCase() == "clear") {
    document.getElementById("tempIcon").src = "./icon/sun.svg";
  } else {
    document.getElementById("tempIcon").src = "./icon/cloudy.svg";
  }
  // --------City Of Weather Set From Search Bar-------------------

  document.getElementById("city").innerText = searhInput;
  // --------Minimum Temp Of Weather Set-------------------
  document.getElementById("temp").innerText = resData.main.temp_min;
  // --------Description Of Weather Set-------------------

  document.getElementById("tempDes").innerText = resData.weather[0].main;
  // --------Humidity Of Weather Set-------------------

  document.getElementById(
    "humidityText"
  ).innerText = `${resData.main.humidity}%`;
  // --------Wind Speed Of Weather Set-------------------

  windspeed = document.getElementById("windspeed").innerText =
    resData.wind.speed;
  // --------Make Search Bar empty after search-------------------

  document.getElementById("searhInput").value = "";
};

// --------Calling Search bar function on Press Enter-------------------

document.getElementById("form").addEventListener("submit", searchBarWork);
