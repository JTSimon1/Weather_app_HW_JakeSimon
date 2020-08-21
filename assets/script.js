
const inpKey = document.getElementById('city');



// var city = document.getElementById('city').value;
$("#submit").on('click', ()=> {

    // empty the divs when the button is clicked 
    $("#forecast").empty();
    $("#weather").empty();

    // local storage stuff

    const key = inpKey.value;

    console.log(key);





var city = document.getElementById("city").value;
var url = "http://api.openweathermap.org/data/2.5/forecast?q="+ city+"&appid=8795bea27268cd8044a6ed0bd28e7b66";
localStorage.setItem(city, url);
localStorage.getItem(city)



let liVar = document.createElement('a');
let liText = document.createTextNode(city);
liVar.append(liText);
liVar.setAttribute("id", "enteredCity");
$("#cities").append(liVar);


$.getJSON(url, function(data) {
    data = JSON.stringify(data);
    data = JSON.parse(data);
    console.log(data);


    for (i=0; i<6; i++) {
        let weather = data.list[i].main;
        let newDiv = document.createElement('div');
        let para1 = document.createElement('p');
        let para2 = document.createElement('p');
        let para3 = document.createElement('p');
        let para4 = document.createElement('p');
        let hTag = document.createElement("h2");

        if (i===0) {
            // h tag elements
            let Day =document.createTextNode("Today");
            hTag.append(Day);
            newDiv.append(hTag);

            // p tag elements

            // Feels like
            let feelsLike = Math.round((weather.feels_like-273)*(9/5)+32);
            let textNode = document.createTextNode("Feels Like: " + feelsLike);
            para1.append(textNode);
            newDiv.append(para1);
            

            // max p tag elements

            let max = Math.round((weather.temp_max-273)*(9/5)+32);
            let maxText = document.createTextNode("Max Temperature: "+max);
            para2.append(maxText);
            newDiv.append(para2);

            // min 

            let min = Math.round((weather.temp_min-273)*(9/5)+32);
            let minText = document.createTextNode("Min Temperature: "+min);
            para3.append(minText);
            newDiv.append(para3);
            // humidity

            let hum = weather.humidity;
            let humText = document.createTextNode("Humidity: "+hum+"%");
            para4.append(humText);
            newDiv.append(para4);

            newDiv.classList.add('forecast');

            $("#weather").append(newDiv);
        }
        else {
            let Day = document.createTextNode("Day "+(i+1)+":")
            let hTag = document.createElement('h2');
            hTag.append(Day);
            newDiv.append(hTag);

                        // p tag elements

            // Feels like
            let feelsLike = Math.round((weather.feels_like-273)*(9/5)+32);
            let textNode = document.createTextNode("Feels Like: " + feelsLike);
            para1.append(textNode);
            newDiv.append(para1);
            

            // max p tag elements

            let max = Math.round((weather.temp_max-273)*(9/5)+32);
            let maxText = document.createTextNode("Max Temperature: "+max);
            para2.append(maxText);
            newDiv.append(para2);

            // min 

            let min = Math.round((weather.temp_min-273)*(9/5)+32);
            let minText = document.createTextNode("Min Temperature: "+min);
            para3.append(minText);
            newDiv.append(para3);
            // humidity

            let hum = weather.humidity;
            let humText = document.createTextNode("Humidity: "+hum+"%");
            para4.append(humText);
            newDiv.append(para4);

            newDiv.classList.add('col-sm');
            newDiv.classList.add('forecast');
           

            $("#forecast").append(newDiv);
        }
    }
});
});



    
        // const newDiv = document.createElement('div');
        // const para = document.createElement('p');
        // const header = document.createElement('h1');
        // let node = document.createTextNode("Day"+(i+1));
        // header.append(node);
        // newDiv.append(header);

        // let weather = data.list[i];

        // let feelsLike = weather.main.feels_like;
        // console.log(feelsLike);
        // para.append(feelsLike);
        // newDiv.append(para);

        // let max = weather.main.temp_max;
        // let tempMax = document.createTextNode("Temperature:" + ' ' + Math.round((max-273)*(9/5)+32));
        // para.append(tempMax);
        // newDiv.append(para);

        // let min = weather.main.temp_min;
        // let tempMin = document.createTextNode("Temperature:" + ' ' + Math.round((min-273)*(9/5)+32));
        // para.append(tempMin);
        // newDiv.append(para);

        // let humidity = weather.main.humidity;
        // para.append(humidity);
        // newDiv.append(para);


    // This is the current temperature p tag

//    var para = document.createElement("p");
//    var node = document.createTextNode("Temperature:" + ' ' + ((data.main.temp-273)*(9/5)+32));
//    para.appendChild(node);
//    var weatherEl = document.getElementById("weather");
//    weatherEl.appendChild(para);


//    // this is the humidity p tag
//    var para = document.createElement("p");
//    var node = document.createTextNode("Humidity:" + ' ' + data.main.humidity + "%");
//    para.appendChild(node);
//    var weatherEl = document.getElementById("weather");
//    weatherEl.appendChild(para);

//     // this is the min temp p tag
//     var para = document.createElement("p");
//    var node = document.createTextNode("Min Temperature:" + ' ' + ((data.main.temp_min-273)*(9/5)+32));
//    para.appendChild(node);
//    var weatherEl = document.getElementById("weather");
//    weatherEl.appendChild(para);

//    //this is the max temp p tag
//    var para = document.createElement("p");
//    var node = document.createTextNode("Max Temperature:" + ' ' + ((data.main.temp_max-273)*(9/5)+32));
//    para.appendChild(node);
//    var weatherEl = document.getElementById("weather");
//    weatherEl.appendChild(para);

//    // this is the wind speed p tag
//    var para = document.createElement("p");
//    var node = document.createTextNode("Wind Speed:" + ' ' + data.wind.speed);
//    para.appendChild(node);
//    var weatherEl = document.getElementById("weather");
//    weatherEl.appendChild(para);

// });
//     };
// // this is the 5 day forecast call

// function forecast() {


// var city = document.getElementById('city').value;
// var url = "http://api.openweathermap.org/data/2.5/forecast?q="+ city+"&appid=8795bea27268cd8044a6ed0bd28e7b66";
// $.getJSON(url, function(data) {
//     data = JSON.stringify(data);
//     data = JSON.parse(data);
//     console.log(data);


//     // this is the first day of the 5 day forecast

//     // this is the weather of the first day of the 5 day forecast
//     var containerEl = document.getElementById('day1');
//     var para = document.createElement("p");
//    var node = document.createTextNode("Weather:" +" " + data.list[0].weather[0].description);
//    para.appendChild(node);
//    containerEl.appendChild(para);

//     // this is the max temperature for the first day of the 5 day forecast
//     var containerEl = document.getElementById('day1');
//     var para = document.createElement("p");
//    var node = document.createTextNode("Max Temperature:" +" " + ((data.list[0].main.temp_max-273)*(9/5)+32));
//    para.appendChild(node);
//    containerEl.appendChild(para);

//    // this is the min temperature for the first day of the 5 day forecast
//    var containerEl = document.getElementById('day1');
//    var para = document.createElement("p");
//   var node = document.createTextNode("Min Temperature:" +" " + ((data.list[0].main.temp_min-273)*(9/5)+32));
//   para.appendChild(node);
//   containerEl.appendChild(para);

//    // this is the humidity of the first day of the 5 day forecast
//    var containerEl = document.getElementById('day1');
//     var para = document.createElement("p");
//    var node = document.createTextNode("Humidity:" +" " + data.list[0].main.humidity + "%");
//    para.appendChild(node);
//    containerEl.appendChild(para);

//    var containerEl = document.getElementById('day1');
//     var para = document.createElement("p");
//    var node = document.createTextNode("Wind Speed:" +" " + data.list[0].wind.speed);
//    para.appendChild(node);
//    containerEl.appendChild(para);

//    // this is the start of the second day of the 5 day forecast

//    // this is the weather of the second day of the 5 day forecast
//    var containerEl = document.getElementById('day2');
//    var para = document.createElement("p");
//   var node = document.createTextNode("Weather:" +" " + data.list[1].weather[0].description);
//   para.appendChild(node);
//   containerEl.appendChild(para);

//    // this is the max temperature for the second day of the 5 day forecast
//    var containerEl = document.getElementById('day2');
//    var para = document.createElement("p");
//   var node = document.createTextNode("Max Temperature:" +" " + ((data.list[1].main.temp_max-273)*(9/5)+32));
//   para.appendChild(node);
//   containerEl.appendChild(para);

//   // this is the min temperature for the second day of the 5 day forecast
//   var containerEl = document.getElementById('day2');
//   var para = document.createElement("p");
//  var node = document.createTextNode("Min Temperature:" +" " + ((data.list[1].main.temp_min-273)*(9/5)+32));
//  para.appendChild(node);
//  containerEl.appendChild(para);

//   // this is the humidity of the second day of the 5 day forecast
//   var containerEl = document.getElementById('day2');
//    var para = document.createElement("p");
//   var node = document.createTextNode("Humidity:" +" " + data.list[1].main.humidity + "%");
//   para.appendChild(node);
//   containerEl.appendChild(para);

//   // this is the wind speed of the second day of the 5 day forecast
//   var containerEl = document.getElementById('day2');
//    var para = document.createElement("p");
//   var node = document.createTextNode("Wind Speed:" +" " + data.list[1].wind.speed);
//   para.appendChild(node);
//   containerEl.appendChild(para);

//   // this is the start of day 3 out of the 5 day forecast

//   // this is the weather of the third day of the 5 day forecast
//   var containerEl = document.getElementById('day3');
//   var para = document.createElement("p");
//  var node = document.createTextNode("Weather:" +" " + data.list[2].weather[0].description);
//  para.appendChild(node);
//  containerEl.appendChild(para);

//   // this is the max temperature for the third day of the 5 day forecast
//   var containerEl = document.getElementById('day3');
//   var para = document.createElement("p");
//  var node = document.createTextNode("Max Temperature:" +" " + ((data.list[2].main.temp_max-273)*(9/5)+32));
//  para.appendChild(node);
//  containerEl.appendChild(para);

//  // this is the min temperature for the third day of the 5 day forecast
//  var containerEl = document.getElementById('day3');
//  var para = document.createElement("p");
// var node = document.createTextNode("Min Temperature:" +" " + ((data.list[2].main.temp_min-273)*(9/5)+32));
// para.appendChild(node);
// containerEl.appendChild(para);

//  // this is the humidity of the third day of the 5 day forecast
//  var containerEl = document.getElementById('day3');
//   var para = document.createElement("p");
//  var node = document.createTextNode("Humidity:" +" " + data.list[2].main.humidity + "%");
//  para.appendChild(node);
//  containerEl.appendChild(para);

//  // this is the wind speed of the third day of the 5 day forecast
//  var containerEl = document.getElementById('day3');
//   var para = document.createElement("p");
//  var node = document.createTextNode("Wind Speed:" +" " + data.list[2].wind.speed);
//  para.appendChild(node);
//  containerEl.appendChild(para);

//  // this is the start of day 4 out of 5 day forecast

// // this is the weather of the fourth day out of the 5 day forecast
//  var containerEl = document.getElementById('day4');
//  var para = document.createElement("p");
// var node = document.createTextNode("Weather:" +" " + data.list[3].weather[0].description);
// para.appendChild(node);
// containerEl.appendChild(para);

//  // this is the max temperature for the third day of the 5 day forecast
//  var containerEl = document.getElementById('day4');
//  var para = document.createElement("p");
// var node = document.createTextNode("Max Temperature:" +" " + ((data.list[3].main.temp_max-273)*(9/5)+32));
// para.appendChild(node);
// containerEl.appendChild(para);

// // this is the min temperature for the third day of the 5 day forecast
// var containerEl = document.getElementById('day4');
// var para = document.createElement("p");
// var node = document.createTextNode("Min Temperature:" +" " + ((data.list[3].main.temp_min-273)*(9/5)+32));
// para.appendChild(node);
// containerEl.appendChild(para);

// // this is the humidity of the third day of the 5 day forecast
// var containerEl = document.getElementById('day4');
//  var para = document.createElement("p");
// var node = document.createTextNode("Humidity:" +" " + data.list[3].main.humidity + "%");
// para.appendChild(node);
// containerEl.appendChild(para);

// // this is the wind speed of the third day of the 5 day forecast
// var containerEl = document.getElementById('day4');
//  var para = document.createElement("p");
// var node = document.createTextNode("Wind Speed:" +" " + data.list[3].wind.speed);
// para.appendChild(node);
// containerEl.appendChild(para);

// // this is the start of day 5 out of 5 day forecast

// // this is the weather of the 5th day 
// var containerEl = document.getElementById('day3');
// var para = document.createElement("p");
// var node = document.createTextNode("Weather:" +" " + data.list[2].weather[0].description);
// para.appendChild(node);
// containerEl.appendChild(para);

// // this is the max temperature for the 5th day of the 5 day forecast
// var containerEl = document.getElementById('day5');
// var para = document.createElement("p");
// var node = document.createTextNode("Max Temperature:" +" " + ((data.list[4].main.temp_max-273)*(9/5)+32));
// para.appendChild(node);
// containerEl.appendChild(para);

// // this is the min temperature for the 5th day of the 5 day forecast
// var containerEl = document.getElementById('day5');
// var para = document.createElement("p");
// var node = document.createTextNode("Min Temperature:" +" " + ((data.list[4].main.temp_min-273)*(9/5)+32));
// para.appendChild(node);
// containerEl.appendChild(para);

// // this is the humidity of the fifth day of the 5 day forecast
// var containerEl = document.getElementById('day5');
// var para = document.createElement("p");
// var node = document.createTextNode("Humidity:" +" " + data.list[4].main.humidity + "%");
// para.appendChild(node);
// containerEl.appendChild(para);

// // this is the wind speed of the fifth day of the 5 day forecast
// var containerEl = document.getElementById('day5');
// var para = document.createElement("p");
// var node = document.createTextNode("Wind Speed:" +" " + data.list[4].wind.speed);
// para.appendChild(node);
// containerEl.appendChild(para);

