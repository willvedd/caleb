'use strict';

angular
  .module('caleb', ['ngRoute'])
  .run(function($route, $rootScope) {})
  .config(function ($routeProvider) {
   //adding routes and controllers to $route service
    $routeProvider
      .when('/', {
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


function pf(){
  var width = $(window).width();
  if(width > 1440){
    return "xxlarge"
  }
  else if(width > 1280){
    return "xlarge"
  }
  else if(width > 960){
    return "large"
  }
  else if(width > 768){
    return "medium"
  }
  else if(width > 640){
    return "small"
  }
  else{
    return "xsmall"
  }
}




