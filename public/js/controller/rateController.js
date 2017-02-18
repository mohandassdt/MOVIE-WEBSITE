'use strict';

module.exports = function($scope, $http,$log, $rootScope) {
$scope.movieinfo = $rootScope.bookedMovie;

console.log(  $scope.movieinfo );
};
