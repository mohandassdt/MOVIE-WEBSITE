'use strict';

module.exports = function($scope, $http,$log, $rootScope) {
$scope.bookingInfo =$rootScope.confirmPage;

console.log($scope.bookingInfo);




var refreshConfirm = function () {
    $http.get('/bok/bok').success(function (response) {
        console.log('book READ IS SUCCESSFUL');
        $scope.confirmlist = response;
        $scope.confirm = "";
});
};

refreshConfirm();
};
