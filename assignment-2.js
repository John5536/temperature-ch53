let temperature = prompt("Please give a temperature in Celcius");
let Fahrenheit = ((temperature * 9/5) + 32);

function celcius_value(){
    document.getElementById("celcius_imput").innerHTML += `<p>${temperature} </p>`
}
function Fahrenheit_value(){
    document.getElementById("temperature_display").innerHTML+=`<p>${Fahrenheit} </p>`
 }
celcius_value();
Fahrenheit_value();
