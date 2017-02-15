  'use strict';

module.exports = function($scope, $http,$log, $rootScope) {
  $scope.movieinfo = $rootScope.bookedMovie;
  // console.log($scope.movieinfo );




  var selected=[];
  var reserved=[];
  $scope.rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
       $scope.cols = [1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10 ];

       $scope.getStatus = function(seatPos) {
         if(reserved.indexOf(seatPos) > -1) {
                       return 'reserved';
                   } else if(selected.indexOf(seatPos) > -1) {
                       return selected;
                   }

               }

// $scope.seatClicked

$scope.seatClicked=function(seatPos){
  var index = selected.indexOf(seatPos);
   if(index != -1) {
       // seat already selected, remove
       selected.splice(index, 1)
   } else {
       // new seat, push
       selected.push(seatPos);
        console.log(selected);
        document.getElementById("seatno").innerHTML=selected;
 // seatNum=document.getElementById("seatno").innerHTML;
$scope.NumberOfSeats=selected.length;

// $scope.Totalamount=NumberOfSeats*book.Amount;
}
};





  var refreshMape = function () {
        $http.get('/map/map').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.maplist = response;
            $scope.map = "";
        });
    };

    refreshMape();
    };
