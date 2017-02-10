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

  // var refreshbk = function() {
  //     $http.get('/movie/movie').success(function(response) {
  //         console.log('READ IS SUCCESSFUL');
  //         $scope.moviList = response;
  //         $scope.movi = "";
  //     });
  // };
  // refreshbk();

    $scope.bookTicket= function (m) {

                // $rootScope.bookedMovie=m.moviPoster;
                   $rootScope.bookedPoster=m;
alert($rootScope.bookedPoster);
$location.path('/moviebook');
        };

  };






  //
  // var refreshclicking = function () {
  //       $http.get('/showt/showt').success(function (response) {
  //           console.log('READ IS SUCCESSFUL');
  //           $scope.timlist = response;
  //           $scope.tim = "";
  //       });
  //   };
  //
  //   refreshclicking();
  //
  //   $scope.bookTicket= function () {
  //
  //       console.log($scope.tim);
  //       $http.post('/showt/showt', $scope.tim).success(function (response) {
  //           console.log(response);
  //           console.log("CREATE IS SUCCESSFUL");
  //           refreshclicking();
  //       });
  //   };




  // mainMod.controller('MainCtrl', ['$scope','dataShare',
  //     function ($scope,dataShare) {
  //          $scope.text = 'Hey';
  //          $scope.send = function(){
  //            dataShare.sendData($scope.text);
  //          };
  //
  //     }
  // ]);
