let saudiAirlines ={
    airlineName : "saudiAirlines",
    country : "KSA",
    fleetSize : 8479,
    destinations : ["all countries"],
    inOperation : true
}

let destinations1 = "all countries"

if (saudiAirlines.destinations == destinations1){
    console.log(" u can goo!! ");
}else{
    console.log(" u cannot goo :( ");
}

let addDestinations = saudiAirlines.destinations("New dir");



console.log("-------------- functions --------------");

// ! Sum
function sum (num1, num2){
    return num1 + num2 
}
console.log(sum(5, 10));
console.log("----------------------------");

// ! sub
function sub (num1, num2){
    return num1 - num2 
}
console.log(sub(5, 10));
console.log("----------------------------");

// ! div
function div (num1, num2){
    return num1 / num2 
}
console.log(div(5, 10));
console.log("----------------------------");

// ! mul
function mul (num1, num2){
    return num1 * num2 
}
console.log(mul(5, 10));
console.log("----------------------------");

