/// <reference path="../../_refrence.ts" />
(()=>{
'use strict';

	angular.module('ct.views')
		.config(registerRoutes);
		
		
		registerRoutes.$inject = ['$routeProvider'];
		function registerRoutes($routeProvider: ng.route.IRouteProvider){
			$routeProvider.when('/', {
				controller:'CarListController',
				controllerAs: 'vm',
				templateUrl:'app/views/home/carlist.tmpl.html'
			})
			.when('/:id', {
				controller:'CarController',
				controllerAs: 'vm',
				templateUrl:'app/views/home/car.tmpl.html'
			});
		}
})();