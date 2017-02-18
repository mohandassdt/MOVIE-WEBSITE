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

          // $scope.Rate= function (m) {
          //
          //
          //                     $rootScope.bookedMovie=m;
          //  // alert($rootScope.bookedMovie);
          //  $location.path('/movie-rate');
          //          };


};
//
//           var unique= function(moviList) {
//
//    return function(movie,moviLanguage) {
//
//       var output = [],
//           keys = [];
//
//       angular.forEach(movie, function(m) {
//
//           var key = m[moviLanguage];
//
//           if(keys.indexOf(moviLanguage) === -1) {
//
//               keys.push(moviLanguage);
//
//               output.push(moviLanguage);
//           }
//       });
// console.log(output);
//       return output;
//
//    };
// }
// unique(moviList);









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
