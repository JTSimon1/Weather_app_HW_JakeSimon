
var url = "http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02";

$.getJSON(url, function(data) {
    console.log(data);
});

