'use strict';

module.exports = function($scope, $http, $rootScope,$location) {

  var refresh = function() {
      $http.get('/movie/movie').success(function(response) {
          console.log('READ IS SUCCESSFUL');
          $scope.moviList = response;
          $scope.movi = "";
      });
  };
  refresh();



 $scope.bookTicket= function (m) {


                     $rootScope.bookedMovie=m;
  $location.path('/moviebook');
          };

          $scope.Rate= function (m) {


                              $rootScope.bookedMovie=m;
           // alert($rootScope.bookedMovie);
           $location.path('/movie-rate');
                   };


};
