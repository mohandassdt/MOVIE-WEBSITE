  'use strict';

module.exports = function($scope, $http,$log, $rootScope) {
  $scope.movieinfo = $rootScope.bookedMovie;


  var refreshBookin = function () {
        $http.get('/bok/bok').success(function (response) {
            console.log('book READ IS SUCCESSFUL');

            $scope.Booklist = response;
            $scope.book = "";
            //


        });
    };

    refreshBookin();







  //
  // $scope.submitForm = function (){
  //      alert($scope.radioValue);
  //  };

  //  $scope.radioValue = 1;

// document.getElementById("seatno").value=book.seatnumbers;
  var selected=[];
  var reserved=[];
  $scope.rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
       $scope.cols = [1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10 ];

       $scope.getStatus = function(seatPos) {
         if(reserved.indexOf(seatPos) > -1) {
                       return 'reserved';
                   } else if(selected.indexOf(seatPos) > -1) {
                       return 'selected';
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
        // document.getElementById("seatno").innerHTML=selected;
        // document.getElementById('myImage').src="img/seat1.gif";
document.getElementById("seatno").innerHTML=selected;
$scope.NumberOfSeats=selected.length;
$scope.book.seatnumbers=selected;


}
};



$scope.addBook = function () {
  $scope.book.Title=$scope.movieinfo.moviTitle;

    console.log($scope.book);
    $http.post('/bok/bok', $scope.book).success(function (response) {
        console.log(response);
        console.log("CREATE IS SUCCESSFUL");
        refreshLocat();

        if (response.Title==$scope.book.Title,response.CityName==$scope.book.CityName) {
            alert('title match');
        }

    });
};




var refreshLocat = function () {
      $http.get('/cty/cty').success(function (response) {
          console.log('READ IS SUCCESSFUL');
          $scope.loclist = response;
          $scope.loc = "";
      });
  };

  refreshLocat();


  var refreshMape = function () {
        $http.get('/map/map').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.maplist = response;
            $scope.map = "";
        });
    };

    refreshMape();

    var refreshTheat = function () {
          $http.get('/theater/theater').success(function (response) {
              console.log('theater READ IS SUCCESSFUL');
              $scope.thtrelist = response;
              $scope.thtre = "";
          });
      };

      refreshTheat();
    };
