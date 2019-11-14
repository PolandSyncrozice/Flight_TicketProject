var search_result_flights = [];

var depSelected;

var retSelected;

function tabPaneComing(){

  var cab = document.getElementById('cabin');

  var cabinSelected = cab.options[cab.selectedIndex].value;

  var adu = document.getElementById('adults');

  var adultSelected = adu.options[adu.selectedIndex].value;

  search_result_flights.push({"Departing":depSelected,
                              "Returning":retSelected,
                              "flightRound":radioChecked,
                              "Cabin":cabinSelected,
                              "Adults":adultSelected
  
  });

  window.sessionStorage.setItem('myArray', JSON.stringify(search_result_flights));



}
