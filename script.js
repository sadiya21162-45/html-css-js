const apiKey = "https://api.openweathermap.org/"; // 👈 Replace this

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    document.getElementById("city").textContent = `City: ${data.name}`;
    document.getElementById(
      "temperature"
    ).textContent = `Temp: ${data.main.temp}°C`;
    document.getElementById(
      "description"
    ).textContent = `Weather: ${data.weather[0].main}`;
    document.getElementById(
      "icon"
    ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById("icon").style.display = "block";
  } catch (error) {
    alert("Failed to fetch weather data.");
    console.error(error);
  }
}
