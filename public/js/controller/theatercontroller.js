'use strict';

module.exports = function($scope, $http) {
  $scope.booking = 'booking';

  var refresh = function () {
        $http.get('/theater/theater').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.theaterlist = response;
            $scope.thtre = "";
        });
    };

    refresh();

    $scope.addTheater = function () {
        console.log($scope.thtre);
        $http.post('/theater/theater', $scope.thtre).success(function (response) {
            console.log(response);
            console.log("CREATE IS SUCCESSFUL");
            refresh();
        });
    };

    $scope.removeTheater = function (id) {
        console.log(id);
        $http.delete('/theater/theater' + id._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editTheater = function (id) {
         $http.get('/theater/theater' + id._id).success(function (response) {
            $scope.thtre = response[0];
        });
    };

    $scope.updateTheater = function () {
        console.log("REACHED UPDATE");
        console.log($scope.thtre._id);
        $http.put('/theater/theater' + $scope.thtre._id, $scope.thtre).success(function (response) {
            console.log(response);
            refresh();
        })
    }
};
