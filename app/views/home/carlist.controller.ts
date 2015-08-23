/// <reference path="../../_refrence.ts" />
(()=>{
'use strict';

	angular.module('ct.views')
		.controller('CarListController', CarListController);
    
    CarListController.$inject = ['dataService'];
    function CarListController(dataservice:IDataservice){
      var vm = this;
      vm.cars = null;
      
      init();
      
      //
      function init(){
        dataservice.getCars()
            .then(onSuccess)
            .catch(onError);
      }
      
      function onSuccess(data){
            vm.cars = data;
      }
      
      function onError(err){
        //log error
      }
    }

})();