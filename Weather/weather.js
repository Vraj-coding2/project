window.onload = () => {
const API_KEY = "540afef1ee0d439786c162140250504";
const BASE_URL = "http://api.weatherapi.com/v1/current.json";

let input = document.getElementById('input');
let weathername = document.getElementById("name");
let srno = 1;

const fetchdata = async (location = "London") => {
  const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${location}&aqi=no`);
  const result = await response.json();
  let image = document.getElementById("image");
  let calcustext = document.getElementById("calcus-text");
  let humiditytext = document.getElementById("humidity-text");
  let Windtext = document.getElementById("Wind-text");
  let countryName = result.location.name;
  let icon = result.current.condition.icon;
  image.src = "https:" + icon;
  image.classList.add("icon");
  calcustext.innerHTML = result.current.temp_c;
  humiditytext.innerHTML = result.current.humidity;
  Windtext.innerHTML = result.current.gust_kph;
  if(input.value.trim().toLowerCase() === weathername.value){
  weathername.innerHTML = countryName;
  }else{
    weathername.innerHTML = input.value;
  }
  let rows = document.createElement("tr");
  let column1 = document.createElement("td");
  let column2 = document.createElement("td");
  let column3 = document.createElement("td");
  let column4 = document.createElement("td");
  let tableBody = document.getElementById("table-body");
  if (input.value.trim().toLowerCase() === countryName.toLowerCase()) {
    column1.innerHTML = countryName; 
} else {
    column1.innerHTML = input.value; 
}
  column2.innerHTML =  result.current.temp_c;
  column3.innerHTML = result.current.humidity;
  column4.innerHTML = result.current.gust_kph;
  rows.appendChild(column1);
  rows.appendChild(column2);
  rows.appendChild(column3);
  if (srno === 1) {
    weathername.innerHTML = countryName;
    column1.innerHTML = countryName;
  }
  rows.appendChild(column4);
  tableBody.appendChild(rows);
  srno++;
};
fetchdata();
document.getElementById('btn').addEventListener("click", (e) => {
  e.preventDefault();
  let inputval = input.value.trim();
  if (inputval) {
    fetchdata(inputval);
  }
});
};
