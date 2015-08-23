/// <reference path="../_refrence.ts" />
(() => {
	'use strict';

	angular.module('ct.core', [
		'ngRoute'
	])
		.config(registerRoutes)
		.config(registerHttpDefaults);


	registerRoutes.$inject = ['$routeProvider'];
	function registerRoutes($routeProvider: ng.route.IRouteProvider) {

		$routeProvider.otherwise({ redirectTo: '/' });

	}

	registerHttpDefaults.$inject = ['$httpProvider'];
	function registerHttpDefaults($httpProvider: ng.IHttpProvider) {

		delete $httpProvider.defaults.headers.common["X-Requested-With"];
		// $httpProvider.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

	}

})();