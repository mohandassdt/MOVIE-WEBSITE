'use strict';

module.exports = function($scope, $http,$log, $rootScope) {
$scope.movieinfo = $rootScope.bookedMovie;

console.log(  $scope.movieinfo );

var refreshRate = function() {
    $http.get('/rt/rt').success(function(response) {
        console.log('READ IS SUCCESSFUL');
        $scope.rateList = response;
        $scope.rate = "";
    });
};
refreshRate();


$scope.doneRate= function (rateList) {
  $scope.rate.Title=$scope.movieinfo.moviTitle;
$scope.rate.cnCityName=$scope.movieinfo.moviYear;

  $scope.rate.cnHallName=$scope.movieinfo.moviLanguage;
  // $scope.rate.cnDay=$scope.movieinfo.Day;
  // $scope.rate.cnShowTime=$scope.movieinfo.ShowTime;
  // $scope.rate.cnAmount=$scope.movieinfo.Amount;
  // $scope.rate.cnNoTickets=$scope.movieinfo.NoTickets;
  // $scope.rate.cnseatnumbers=$scope.movieinfo.seatnumbers;


    $http.post('/rt/rt', $scope.rate).success(function (response) {
            console.log(response);


        });


         };
};
