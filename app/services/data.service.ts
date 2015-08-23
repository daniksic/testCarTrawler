/// <reference path="../_refrence.ts" />
interface IDataservice{
	getCars():ng.IHttpPromise<IVehAvilResponse>;
	getCar(id:string):IVehAvails;
}
(()=>{
	'use strict';
	
	 angular.module('ct.services', [])
	 	.factory('dataService',dataservice);
	 
	 dataservice.$inject = ['$http'];
	 function dataservice($http:ng.IHttpService):IDataservice{
		 var _cars:IVehAvilResponse;
		 
		 var service={
			 getCars:getCars,
			 getCar: getCar
		 }
		 
		 return service;
		 
		 //private fn
		 function getCars():ng.IHttpPromise<IVehAvilResponse> {
			// get method is not working becouse of ACAO, jsonp becouse not reciving valid format
			//  return	$http.jsonp('http://www.cartrawler.com/ctabe/cars.json?callback=JSON_CALLBACK')
			 return	$http.get('http://www.cartrawler.com/ctabe/cars.json') //REFACTOR move to config
			 			.success(onSuccess)
						 .error(onError);
		 }
		 function getCar(id:string):IVehAvails{
			 if(typeof(id) !== 'string') return; // should throw error
			 
			 if(!_cars){
				 getCars();// REFACTOR should wait for response!!!
			 }
			 
			 var match: IVehAvails[];
			 angular.forEach(_cars.VehVendorAvails, function(e) {
    				match = e.VehAvails.filter(function(c) {
        				return (c.Vehicle.Code === id);
				 	})
			});
			 
			 return match[0];
		 }
		 
		 function onSuccess(response:IVehAvilResponse){
			 console.log(response);
			 _cars = response;
			 return response;
		 }
		 
		 function onError(err){
			 console.log(err);
			 //log error
		 }
	 }
})();