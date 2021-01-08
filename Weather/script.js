var input = document.querySelector('.input_text');
var button= document.querySelector('.submit');
var cityName = document.querySelector('.name');
var image = document.querySelector('.icon');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=imperial&appid=44e2f0995fca4a8e5234feaa245cdd67')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        image.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        cityName.innerHTML = data.name + ", " + data.sys.country;
        desc.innerHTML = data.weather[0].description;
        temp.innerHTML = Math.round(data.main.temp) + "°F";
    })
    .catch(err => alert("Please enter valid city name or zip code"));
})