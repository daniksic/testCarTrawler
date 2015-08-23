/// <reference path="_refrence.ts" />
(()=>{
	'use strict';
	
	angular.bootstrap(document, ['ct']);
	
	angular.module('ct')
		.run(onStart);
		
		
		onStart.$inject=[];
		function onStart(){
			
		}
})();