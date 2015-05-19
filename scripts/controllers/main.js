'use strict';

angular.module('caleb').controller('MainCtrl', function ($scope,$rootScope, LoadData, $http) {
  
  console.log("Main Controller");
  if(!$rootScope.postData){
    LoadData.fetch().then(
      function(result) {
        $rootScope.projects = result.projects;
        $rootScope.portfolioTypes = result.portfolio_types;
        console.log("postData",result);
        $rootScope.$broadcast('dataFetched');
    });
  }
  else{
    console.error("Error retrieving data.");
  };

  $rootScope.pf = pf();
  var resizeId;
  $(window).on('resize', function (){
    clearTimeout(resizeId);
    resizeId = setTimeout(function(){
      $rootScope.pf = pf();
      $rootScope.$apply();
    }, 500);
  });

  $rootScope.randomOffset = function(){
    return Math.floor(Math.random() * 3000);
  }
})


