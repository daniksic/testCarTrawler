!function(){"use strict";function t(t){function e(){return t.get("http://www.cartrawler.com/ctabe/cars.json").success(r).error(c)}function n(t){if("string"==typeof t){o||e();var n;return angular.forEach(o.VehVendorAvails,function(e){n=e.VehAvails.filter(function(e){return e.Vehicle.Code===t})}),n[0]}}function r(t){return console.log(t),o=t,t}function c(t){console.log(t)}var o,i={getCars:e,getCar:n};return i}angular.module("ct.services",[]).factory("dataService",t),t.$inject=["$http"]}(),function(){"use strict";angular.module("ct",["ct.core","ct.services","ct.views"])}(),function(){"use strict";angular.module("ct.views",["ct.core","ct.services"])}(),function(){"use strict";function t(t){t.otherwise({redirectTo:"/"})}function e(t){delete t.defaults.headers.common["X-Requested-With"]}angular.module("ct.core",["ngRoute"]).config(t).config(e),t.$inject=["$routeProvider"],e.$inject=["$httpProvider"]}(),function(){"use strict";function t(t){function e(){}e()}angular.module("ct.views").controller("CarDetailController",t),t.$inject=["dataservice"]}(),function(){"use strict";function t(t){function e(){t.getCars().then(n)["catch"](r)}function n(t){c.cars=t}function r(t){}var c=this;c.cars=null,e()}angular.module("ct.views").controller("CarListController",t),t.$inject=["dataService"]}(),function(){"use strict"}(),function(){"use strict";function t(t){t.when("/",{controller:"CarListController",controllerAs:"vm",templateUrl:"app/views/home/carlist.tmpl.html"}).when("/:id",{controller:"CarController",controllerAs:"vm",templateUrl:"app/views/home/car.tmpl.html"})}angular.module("ct.views").config(t),t.$inject=["$routeProvider"]}(),function(){"use strict";function t(){}angular.bootstrap(document,["ct"]),angular.module("ct").run(t),t.$inject=[]}();