
// $(document).ready(function() {
//     $("#getWeatherForecast").click(function() {
//         var city = "New york city";
//         var key = "8795bea27268cd8044a6ed0bd28e7b66";
function ready() {
    var city ="new york city";
    var key = "8795bea27268cd8044a6ed0bd28e7b66";
        $.ajax({
            url: "api.openweathermap.org/data/2.5/weather",
            dataType: "json",
            type: "GET",
            data: {q:city, appid: key, units: "metric"},

            sucess: function(data){
                console.log(data);
            }
        });
    };
    ready();
//     });
// });