let saudiAirlines ={
    airlineName : "saudiAirlines",
    country : "KSA",
    fleetSize : 8479,
    destinations : "all countries",
    inOperation : true
}

let destinations1 = "all countries"

if (saudiAirlines.destinations == destinations1){
    console.log(" u can goo!! ");
}else{
    console.log(" u cannot goo :( ");
}

let addDestinations = saudiAirlines.destinations("New dir");

