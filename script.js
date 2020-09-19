
window.addEventListener("loadstart",() =>{
    let city= null;
    let cityElement=document.getElementById("cityVal");

    window.addEventListener("load", ()=>{
        cityElement.innerHTML= getjs
    });

    document.getElementById('cityVal').addEventListener('change', function(event) {
        city = event.target.value;
    });

    console.log(city);

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=44e2f0995fca4a8e5234feaa245cdd67", function(data){
        console.log(data);
    
        var icon ="https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        var temp = Math.round(data.main.temp);
        var weather= data.weather[0].description;
    
        $('.icon').attr('src', icon);
        $('.temp').append(temp);
        $('.weather').append(weather);
    });

    console.log(city);
});

