'use strict';

angular.module('caleb').controller('MainCtrl', function ($scope,$rootScope, LoadData, $http) {
  
  console.log("Main Controller");
  if(!$rootScope.postData){
    LoadData.fetch().then(
      function(result) {
        //$rootScope.postData = result;
        $rootScope.projects = result.projects;
        console.log("postData",result);
        $scope.$broadcast('dataFetched');
    });
  }
  else{
    console.error("Error retrieving data.");
  };

  
  // $rootScope.pf = pf();//This code refers to the picturefill functionality
  // var resizeId;
  // $(window).on('resize', function () {//Only execute when resize is complete
  //   clearTimeout(resizeId);
  //   resizeId = setTimeout(function(){
  //     $rootScope.pf = pf();
  //   }, 500);
  // });


  function orderSigns(){
    $rootScope.signs.sort(function(a,b) { return parseFloat(a.number) - parseFloat(b.number) } );
  }
})


