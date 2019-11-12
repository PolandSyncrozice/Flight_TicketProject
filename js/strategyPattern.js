
    var Baggage = function () {
        this.getPrice = function () {
            return 350;
        }
    }
    var Insurance = function () {
        this.getPrice = function () {
            return 1300;
        }
    }

    var Service = function () {
        var price = 0;
    };

    Service.prototype = {
        getPrice: function () {
            return price;
        }

    };


    var Package = function () {
        var services = [];
        this.addService = function (s) {
            services.push(s);
        };
        this.getTotalPrice = function (promo) {
            return promo.getTotalPrice(this);
        }

        this.getPrivilage = function (promo) {
            return promo.getPrivilage(this);
        }

        this.getAllService = function () {
            console.log("All Service: ");
            for (var i = 0; i < services.length; i++) {
                console.log(services[i]);
            }
        };

        //return true or false 
        this.containBaggage = function () {
            for (var i = 0; i < services.length; i++) {
                if (services[i] instanceof Baggage) {
                    return true;
                }
            }
            return false;
        };

        this.containInsurance = function () {
            for (var i = 0; i < services.length; i++) {
                if (services[i] instanceof Insurance) {
                    return true;
                }
                return false;
            }
        };


    }

    var Promotion = function () {

    }
    Promotion.prototype = {
        getTotalPrice: function (package) { },
        getPrivilage: function (package) { }
    }

    var Promotion1 = function () {
        var allService = 1650;
        this.getTotalPrice = function (package) {
            if (package.containBaggage && package.containInsurance) {
                return allService;
            }
            return 0;
        };
        this.getPrivilage = function (package) {
            if (package.containBaggage && package.containInsurance) {
                var discountOfService = 10/100;//10 Percent(%)
                return allService*discountOfService;
            }
            return 0;
        };
    }