/// <reference path="../../_refrence.ts" />
(()=>{
'use strict';

	angular.module('ct.views')
		.controller('CarDetailController', CarDetailController);
    
    CarDetailController.$inject = ['dataservice'];
    function CarDetailController(dataservice:IDataservice){
      
      
      
      init();
      //
      function init(){
        
      }
      
      function onError(err){
        //log error
      }
    }

})();