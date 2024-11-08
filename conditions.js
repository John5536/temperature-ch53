// console.log("if-statement")

// if(condition){

// }

// if(3>7){
//     console.log("i am inside the if statement");
// }

// let isTrue = false;

// if(isTrue){
//     console.log("Yes");

// }
// else{
//     console.log("no");
// }

// function the_weather(){
//     let temperature = prompt("enter the temperature in celcius");
    
//     if (temperature<15){
//         console.log("PLease wear a jacket");
//         document.getElementById("weather").classList.add("cold");
//     }
//     else if(temperature<25){
//         console.log("please wear a sweater");
//     }
//     else if(temperature>=25){
//         console.log("Your can wear a t-shirt");
//     }
//     else{
//         console.log("null");
//     }
//     document.getElementById("weather").innerHTML=("cold");
// }

// the_weather()
   
function convertTemperature (){

    
    let temperature_choice= prompt("Would you like to enter temperature in Celcius or Fahrenheit ?");
    let temperature_lower = temperature_choice.toLowerCase();

    if (temperature_lower == "celcius"){
        let celcius_input = prompt("input our temperature in to convert it to fahrenheit");
        let conversionTocelcius = (celcius_input * 9/5) + 32;
        alert("your temperature converted is " + conversionTocelcius);
        if (conversionTocelcius< 15){
            alert("Please wear a Jacket");
            document.getElementById("weather").classList.add("cold");
        }
        else if (conversionTocelcius<25){
            alert("Please wear a sweater");
            document.getElementById("weather").classList.add("cold");
        }
        else if (conversionTocelcius>=25){
            alert("Please wear a t shirt");
            document.getElementById("weather").classList.add("hot");
        }

    }
    else if (temperature_lower == "fahrenheit"){
        let fahrenheit_input = prompt("input our temperature in to convert it to celcius");
        let conversionTofahrenheit = (fahrenheit_input - 32) * 5/9;
        alert("your temperature converted is " + conversionTofahrenheit);
    }
    
}

// function Thermostat_controller(){

//     if (conversionTocelcius< 15){
//         alert("Please wear a Jacket");
//         document.getElementById("weather").classList.add("cold");
//     }
//     else if (conversionTocelcius<25){
//         alert("Please wear a sweater");
//         document.getElementById("weather").classList.add("cold");
//     }
//     else if (conversionTocelcius>=25){
//         alert("Please wear a t shirt");
//         document.getElementById("weather").classList.add("hot");
//     }
// }

convertTemperature ()
//Thermostat_controller()