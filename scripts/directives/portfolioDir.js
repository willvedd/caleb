'use strict';

angular.module('caleb')
 .directive('portfolio', function ($rootScope) {
   return {
	restrict: 'AEC',      
	link: function (scope, element, attrs) {
	  	console.log("portfolio directive");
	},
 	templateUrl: 'views/portfolio.html'
 }
});