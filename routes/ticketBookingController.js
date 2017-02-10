'use strict';

module.exports = function($scope, $http,$log, $rootScope) {
  $scope.movieinfo = $rootScope.bookedMovie;
  console.log($scope.movieinfo );

//  $scope.poster=$rootScope.bookedPoster;
// alert($scope.title);
  // var refresh = function() {
  //     $rootScope.bookedMovie=$scope.title;
  //     $rootScope.bookedPoster=$scope.poster;
  //     }
  //     refresh();



  var refreshMape = function () {
        $http.get('/map/map').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.maplist = response;
            $scope.map = "";
        });
    };

    refreshMape();
    };

  // var refreshTheat = function () {
  //       $http.get('/bok/bok').success(function (response) {
  //           console.log('theater READ IS SUCCESSFUL');
  //           $scope.thtrelist = response;
  //           $scope.thtre = "";
  //       });
  //   };
  //
  //   refreshTheat();
  //
  //   var refreshLocat = function () {
  //         $http.get('/cty/cty').success(function (response) {
  //             console.log('READ IS SUCCESSFUL');
  //             $scope.loclist = response;
  //             $scope.loc = "";
  //         });
  //     };
  //
  //     refreshLocat();
  //
  //
  //     var refreshSho = function () {
  //           $http.get('/showt/showt').success(function (response) {
  //               console.log('READ IS SUCCESSFUL');
  //               $scope.timlist = response;
  //               $scope.tim = "";
  //           });
  //       };
  //
  //       refreshSho();
