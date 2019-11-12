var result_flights = [];

var selectFlight;

function toPayment(){

result_flights.push(selectFlight);
  
    window.sessionStorage.setItem('myFlight_Array', JSON.stringify(result_flights));
  
    //json write file
    // location.replace("payment.html");
  
  }