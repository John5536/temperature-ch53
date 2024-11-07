console.log("if-statement")

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

function the_weather(){
    let temperature = prompt("enter the temperature in celcius");
    
    if (temperature<15){
        console.log("PLease wear a jacket");
        document.getElementById("weather").classList.add("cold");
    }
    else if(temperature<25){
        console.log("please wear a sweater");
    }
    else if(temperature>=25){
        console.log("Your can wear a t-shirt");
    }
    else{
        console.log("null");
    }
    document.getElementById("weather").innerHTML=("cold");
}

the_weather()