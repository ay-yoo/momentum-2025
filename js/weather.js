const API_KEY = "f843576e3e8673c6bbf43049be126452";

function onGeoOk(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang={lang}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temp = document.querySelector(".weather span:first-child");
      const location = document.querySelector(".weather span:last-child");
      temp.innerText = `${Math.floor(data.main.temp)}°C`;
      location.innerText = data.name;
    });
}

function onGeoError() {
  alert("🚨 위치설정을 허용해주세요.");
  const temp = document.querySelector(".weather span:first-child");
  temp.innerText = "Can't find your location";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
