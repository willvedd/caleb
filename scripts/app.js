'use strict';

angular
  .module('caleb', ['ngRoute'])
  .run(function($route, $rootScope) {
    console.log("Caleb app starting");
  })
  .config(function ($routeProvider) {
   //adding routes and controllers to $route service
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .otherwise({
        redirectTo: '/',
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      });
  });


function pf(){
  var width = $(window).width();
  // if(width > 1440){
  //   return "xxlarge"
  // }
  // else if(width > 1280){
  //   return "xlarge"
  // }
  // else if(width > 960){
  //   return "large"
  // }
  // else if(width > 768){
  //   return "medium"
  // }
  // else if(width > 640){
  //   return "small"
  // }
  // else{
  //   return "xsmall"
  // }
  if(width > 1080){
    return "large"
  }
  else if(width > 768){
    return "medium"
  }
  else{
    return "thumbnail"
  }
}




