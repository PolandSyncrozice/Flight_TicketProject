var slip_flights = [];

var personalData = [];

var newPackaged;

var chooseServices;

 //field birth date
 var dayOfBirth = 1;
 var monthOfBirth = 1;
 var yearOfBirth = 2019;
 //--------------

 //field Passport Expiration
 var dayOfPassport = 1;
 var monthOfPassport = 1;
 var yearOfPassport = 2019;
 //--------------

 var tax ;

 var servicesFee;

 var discount;

 var priceOfTotalFlight;

 var nexting;



function toSliper(){

    slip_flights.push(newPackaged);

    //__type 1 ::  window.sessionStorage.setItem('slip_flights', JSON.stringify(slip_flights));

  //__type 2 ::
    chooseServices = localStorage.slip_flights; // test chooseService obj use methods from Strategy Pattern
    
    //Reference : https://stackoverflow.com/questions/18089033/json-stringify-does-not-process-object-methods

  //--------------- json write file ------------------

   //field Country
 var country =  document.getElementById('country');

 var countrySelected = country.options[country.selectedIndex].value;
 //-------------

 //title
 var titlePerson = document.getElementById('titlePerson');

 var titlePersonSelected = titlePerson.options[titlePerson.selectedIndex].value;

  var Name = document.getElementById('firstName').value;
  var LastName = document.getElementById('lastName').value;

  //passport
  var passportID = document.getElementById('passportID').value;

  personalData.push({"title" : titlePersonSelected,
                     "Name" : Name,
                     "LastName" : LastName,
                     "passportID" : passportID,
                     "dayOfBirth":dayOfBirth,
                     "monthOfBirth":monthOfBirth,
                     "yearOfBirth":yearOfBirth,
                     "dayOfPassport":dayOfPassport,
                     "monthOfPassport":monthOfPassport,
                     "yearOfPassport":yearOfPassport,
                     "country": countrySelected,
                     "priceOfTotalFlight" : priceOfTotalFlight
                    });

  window.sessionStorage.setItem('personalData', JSON.stringify(personalData));

  //routing
  location.replace("slip.html");

}
